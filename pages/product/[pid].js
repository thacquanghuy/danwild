import { useRouter } from 'next/router'
import Content from '../../components/ProductDetail'

const Product = () => {
  const router = useRouter()
  const { pid } = router.query

  return <Content id={pid} />
}

export default Product
