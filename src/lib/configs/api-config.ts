import { BASE_URL } from "../constant/variables";
  
  type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  
  interface fetchConfig {
    method: RequestMethod;
    headers?: HeadersInit;
    body?: unknown;
    params?: Record<string, unknown>;
  }
  
  const API_BASE_URL = `${BASE_URL}`;

  
  // Reusable fetch function
  export const apiFetch = async <T>(
    endpoint: string,
    { method, headers, body, params }: fetchConfig
  ): Promise<T> => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null) return;
        if (Array.isArray(value)) {
          value.forEach((v) => searchParams.append(key, String(v)));
        } else if (typeof value === 'object') {
          searchParams.append(key, JSON.stringify(value));
        } else {
          searchParams.append(key, String(value));
        }
      });
    }

    const queryString = searchParams.toString();
    const url = `${API_BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
    console.log('API Request URL:', url);
    
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
  
    try {
      const response = await fetch(url, options);
  
      // Check content type
      const contentType = response.headers.get('content-type');
      
      if (!contentType || !contentType.includes('application/json')) {
        // Special handling for Transaction/GetAll endpoint that returns text
        if (endpoint === '/Transaction/GetAll') {
          const text = await response.text();
          return text as T;
        }
        throw new Error(`Expected JSON response but got ${contentType}`);
      }
  
      // Read response body directly as JSON
      const result = await response.json();
      console.log('API Response:', result);
      return result as T;
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('API Error:', error.message);
      } else {
        console.error('API Error:', String(error));
      }
      throw error as unknown;
    }
  };
  
  