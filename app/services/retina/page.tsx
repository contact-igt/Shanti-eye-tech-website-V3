import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function RetinaPage() {
  return <ServicePage content={servicePages.retina} />;
}