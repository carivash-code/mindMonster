export type ServicesType = {
  title: string,
  subtitle: string,
}
export type ServiceDecription = {
  text: string
}

export type ServiceType = {
  title: string,
  subtitle: string,
  services: ServicesType[],
  servicesDescription: ServiceDecription[]
}