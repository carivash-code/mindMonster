import { ServiceType } from "../../Types/ServicesType"
import { OurServices } from "../../components/our-services/OurServices"
import { Header } from "../../components/ui/headers/Header"
import { servicesList, serviceListDescription } from "../../constants/servicesName"


export const Services = () => {
  const services: ServiceType = {
    title: 'services',
    subtitle: 'Lo que hacemos.',
    services: servicesList,
    servicesDescription: serviceListDescription
  }
  return (
    <div className="d-flex">
      <Header />
      <OurServices {...services} />
    </div>
  )
}