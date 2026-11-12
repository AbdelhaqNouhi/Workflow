import {Bell, Menu, Search} from "lucide-react";

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({onMenuClick}: HeaderProps) {
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-surface px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 flex-1 items-center gap-3">
                <button
                    type="button"
                    onClick={onMenuClick}
                    aria-label="Open navigation"
                    aria-controls="workflow-sidebar"
                    className="rounded-md p-2 text-muted hover:bg-background lg:hidden"
                >
                    <Menu size={20} />
                </button>

                <label className="flex h-10 w-full max-w-sm items-center gap-2 rounded-md border border-border bg-background px-3">
                    <Search
                        size={17}
                        className="shrink-0 text-muted"
                        aria-hidden="true"
                    />

                    <span className="sr-only">Search workspace</span>

                    <input
                        type="search"
                        placeholder="Search workspace..."
                        className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                    />
                </label>
            </div>

            <div className="ml-4 flex shrink-0 items-center gap-4">
                <button
                    type="button"
                    disabled
                    aria-label="Notifications are not available yet"
                    title="Notifications coming soon"
                    className="relative rounded-md p-2 text-muted opacity-70"
                >
                    <Bell size={19} strokeWidth={1.8} aria-hidden="true" />
                </button>

                <div className="flex items-center gap-3 border-l border-border pl-4">
                    <div
                        aria-hidden="true"
                        className="flex size-9 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary"
                    >
                        AD
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-foreground">
                            Admin User
                        </p>
                        <p className="text-xs text-muted">Administrator</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
