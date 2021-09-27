import { Link } from 'react-router-dom';

export default function CardPostSp(props) {

    return (
            <div class="col-lg-4 col-md-6 mb-3">
                <div class="service-box blue">
                    <i class="ri-discuss-line icon"></i>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <Link to={`/offerdetail/${props.id}`} class="read-more"><i class="bi bi-eye"></i></Link>
                    <Link to={`/editoffer/${props.id}`}class="read-more"><i class="bi bi-pencil-square"></i></Link>
                    <a href="#" class="read-more" onClick={() => props.delete(props.id)}><i class="bi bi-trash"></i></a>

                </div>
            </div>
    );
}