import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function SquintPage() {
  return <ServicePage content={servicePages.squint} />;
}
