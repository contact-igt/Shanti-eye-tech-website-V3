import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function CataractPage() {
  return <ServicePage content={servicePages.cataract} />;
}