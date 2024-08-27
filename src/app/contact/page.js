import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 mb-4">
          <Link href="/assets/videos/mov_bbb (1).mp4" passHref>
            <div className="card" style={{ width: '18rem' }}>
              <Image 
                src="/assets/img/card-1.png" 
                alt="Description of image 1" 
                layout="responsive" 
                width={300} 
                height={200} 
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content for image 1.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link href="/videos/your-video" passHref>
            <div className="card" style={{ width: '18rem' }}>
              <Image 
                src="/assets/img/your-image2.jpg" 
                alt="Description of image 2" 
                layout="responsive" 
                width={300} 
                height={200} 
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content for image 2.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link href="/videos/your-video" passHref>
            <div className="card" style={{ width: '18rem' }}>
              <Image 
                src="/assets/img/your-image3.jpg" 
                alt="Description of image 3" 
                layout="responsive" 
                width={300} 
                height={200} 
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content for image 3.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
