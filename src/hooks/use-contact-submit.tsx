import envConfig from "@/common/env-config";
import { useState } from "react";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface UseContactSubmitReturn {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  response: any | null;
  error: any | null;
  submit: (payload: ContactPayload) => Promise<void>;
}

const useContactSubmit = (): UseContactSubmitReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);

  const submit: UseContactSubmitReturn["submit"] = async (payload) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    setResponse(null);
    setError(null);

    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const body = JSON.stringify(payload);

      const response = await fetch(envConfig.FORM_API, {
        method: "POST",
        headers,
        body,
      });

      const responseJson = await response.json();

      if (!response.ok) {
        throw new Error(responseJson.message || "Failed to send message.");
      }

      setIsSuccess(true);
      setResponse(responseJson);
    } catch (err: any) {
      setIsError(true);
      setError(err.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    isSuccess,
    response,
    error,
    submit,
  };
};

export default useContactSubmit;
