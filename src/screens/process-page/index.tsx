import { ProcessType } from "../../Types/ProcessType"
import { OurProcess } from "../../components/our-process/OurProcess"
import { Header } from "../../components/ui/headers/Header"
import { serviceName, serviceName2 } from "../../constants/process"

export const Process = () => {
  const process: ProcessType = {
    title: 'services',
    subtitle: 'Lo que hacemos.',
    process1: serviceName,
    process2: serviceName2
  }

  return (
    <div className="d-flex">
      <Header />
      <OurProcess {...process} />
    </div>
  )
}