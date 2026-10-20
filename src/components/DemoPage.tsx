import type { DemoBusiness } from '../data/siteContent'
import BakeryDemo from './demos/BakeryDemo'
import DemoNotFound from './demos/DemoNotFound'
import FloristDemo from './demos/FloristDemo'
import FurnitureDemo from './demos/FurnitureDemo'
import PetshopDemo from './demos/PetshopDemo'
import SalonDemo from './demos/SalonDemo'

type DemoPageProps = {
  business?: DemoBusiness
}

function DemoPage({ business }: DemoPageProps) {
  if (!business) return <DemoNotFound />

  switch (business.layout) {
    case 'furniture':
      return <FurnitureDemo business={business} />
    case 'bakery':
      return <BakeryDemo business={business} />
    case 'petshop':
      return <PetshopDemo business={business} />
    case 'florist':
      return <FloristDemo business={business} />
    case 'salon':
      return <SalonDemo business={business} />
  }
}

export default DemoPage
