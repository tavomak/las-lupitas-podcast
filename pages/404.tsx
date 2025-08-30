import Image from 'next/image';
import Link from 'next/link';
import Layout from 'components/Templates/Layout';

const FourOhFour = () => (
  <Layout title='Contenido no encontrado' description='Contenido no encontrado'>
    <div className='row justify-content-center align-items-center content-wrapper'>
      <div className='col-lg-5'>
        <div className='text-center'>
          <Image
            src='/hero-home.png'
            alt='Las Lupitas'
            width={699}
            height={617}
            layout='responsive'
          />
          <h1 className='text-uppercase mt-5 fw-bolder'>Ooops, page no found!</h1>
        </div>
        <div className='mt-5 text-center'>
          <Link href='inicio' className='btn btn-primary shadow px-5 py-2'>
            Volver al sitio
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default FourOhFour;
