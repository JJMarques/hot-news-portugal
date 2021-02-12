import FooterComponent from '../components/FooterComponent';

export default function My404() {
    return (
        <>
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <span style={{ color: '#E53E3E', fontSize: '1.5em' }}>
                    {' '}
                    404, esta página ainda não está disponível. 🥵
                </span>
            </div>
            <FooterComponent />
        </>
    );
}
