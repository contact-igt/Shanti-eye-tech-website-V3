import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function LasikPage() {
  return <ServicePage content={servicePages.lasik} />;
}