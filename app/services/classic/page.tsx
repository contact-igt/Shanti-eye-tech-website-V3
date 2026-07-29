import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function ClassicPage() {
  return <ServicePage content={servicePages.classic} />;
}
