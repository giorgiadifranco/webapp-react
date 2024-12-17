export default function ReviewCard({ review }) {

    // Componente per visualizzare il rating in stelline
    const Rating = ({ vote }) => {
      const stars = [1, 2, 3, 4, 5]; // Array con 5 stelle
  
      return (
        <div className='text-warning'>
          <strong>Rating: </strong>
          {/* Mappiamo le stelle, mostrando una stella piena (★) o vuota (☆) */}
          {stars.map((star) => (
            <span key={star} className={star <= vote ? 'star' : 'star-empty'}>
              {star <= vote ? '★' : '☆'}
            </span>
          ))}
        </div>
      );
    };
  
    return (
      <>
        <div className='review card m-3 bg-dark text-white'>
          <div className='card-body'>
            <div className='vote'>
              {/* Visualizza il voto con le stelle */}
              <Rating vote={review.vote} />
            </div>
  
            <h3>{review.name}</h3>
            <p>{review.text}</p>
          </div>
        </div>
      </>
    );
  }
  