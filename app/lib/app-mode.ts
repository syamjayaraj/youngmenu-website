export type AppMode = "manager" | "users";

export const APP_MODE_PATH: Record<AppMode, string> = {
  manager: "/youngmenu-manager",
  users: "/youngmenu",
};

export function parseAppModeFromPath(pathname: string): AppMode | null {
  if (
    pathname === APP_MODE_PATH.manager ||
    pathname.startsWith(`${APP_MODE_PATH.manager}/`)
  ) {
    return "manager";
  }
  if (
    pathname === APP_MODE_PATH.users ||
    pathname.startsWith(`${APP_MODE_PATH.users}/`)
  ) {
    return "users";
  }
  return null;
}
