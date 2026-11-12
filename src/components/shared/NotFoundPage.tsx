import {Link} from "react-router";

export function NotFoundPage() {
    return (
        <section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <p className="text-sm font-semibold text-primary">404</p>

            <h1 className="mt-2 text-2xl font-semibold text-foreground">
                Page not found
            </h1>

            <p className="mt-2 text-sm text-muted">
                The page you're looking for doesn't exist.
            </p>

            <Link
                to="/dashboard"
                className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
                Back to dashboard
            </Link>
        </section>
    );
}
