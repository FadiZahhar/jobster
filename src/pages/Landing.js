import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import styled from 'styled-components';


const Wrapper = styled.main`
nav{
    width:var(--fluid-width);
    max-width:var(--max-width);
    margin:0 auto;
    height:var(--nav-height);
    display:flex;
    align-items:center;
}

.page{
    min-height: calc(100vh - var(--nav-height));
    display:grid;
    align-items:center;
    margin-top:-3rem;
}
h1{
    font-weight:700;
    span {
        color:var(--primary-500);
    }
}
p {
    color: var(--grey-600);
}

.main-img {
    display:none;
}

@media(min-width:992px) {
    .page {
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img {
        display:block;
    }
}
`
const Landing = () => {
    return(
        <Wrapper>
            <nav>
                <img src={logo} alt='jobster logo' className='logo' />
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        Job <span>Tracking</span> app
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className="btn btn-hero">Login / Register</button>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    
    )
}

export default Landing;