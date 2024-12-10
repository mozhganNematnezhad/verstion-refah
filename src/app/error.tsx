"use client";

//components
import { ErrorPageContainer } from "@/components/containers/Errors/ErrorPageContainer/ErrorPageContainer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPageContainer refreshOnClick={() => reset()} />;
}
