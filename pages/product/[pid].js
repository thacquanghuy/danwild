import { useRouter } from 'next/router'
import Content from '../../components/ProductDetail'

const Product = () => {
  const router = useRouter()
  const { pid, type } = router.query

  return <Content id={pid} type={type} />
}

export default Product
