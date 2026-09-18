import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function PediatricEyeCarePage() {
  return <ServicePage content={servicePages.pediatric} />;
}
