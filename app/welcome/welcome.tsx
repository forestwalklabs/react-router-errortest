import { Form, useFetcher } from "react-router";

export function Welcome({ message }: { message: string }) {
  const fetcher = useFetcher();

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-2xl font-bold text-center">
              Resource Route Error Demo
            </h1>
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <fetcher.Form
            method="post"
            action="/api/error-test"
            onSubmit={async (e) => {
              e.preventDefault();
              const response = await fetch("/api/error-test", {
                method: "POST",
              });
              const data = await response.json();
              console.log("error-test Response: ", data);
            }}
          >
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Hit api/error-test And Log to Console
            </button>
          </fetcher.Form>
        </div>
      </div>
    </main>
  );
}
