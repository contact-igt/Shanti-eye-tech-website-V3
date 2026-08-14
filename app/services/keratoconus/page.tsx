import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function KeratoconusPage() {
  return <ServicePage content={servicePages.keratoconus} />;
}
