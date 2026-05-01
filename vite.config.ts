import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgSite = repoName?.endsWith(".github.io");
const githubPagesBase =
  process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgSite ? `/${repoName}/` : "/";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? githubPagesBase,
  plugins: [react()],
});
