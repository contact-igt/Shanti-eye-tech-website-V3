import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export default function GlaucomaPage() {
  return <ServicePage content={servicePages.glaucoma} />;
}
