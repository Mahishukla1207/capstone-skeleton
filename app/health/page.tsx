import type { Metadata } from "next";
import HealthClient from "./HealthClient";

export const metadata: Metadata = {
  title: "FlyRank | Health",
  description: "Health check page that displays the API status response.",
};

export default function HealthPage() {
  return <HealthClient />;
}
