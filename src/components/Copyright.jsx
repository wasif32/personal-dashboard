import React from 'react';

const styles = {
    container: 'fixed bottom-0 left-0 w-full bg-gray py-5 text-center text-xs text-gray-500 shadow-md',
};

const Copyright = React.memo(() => {
    const currentYear = new Date().getFullYear();
    const name = 'Wasif Khan';

    return (
        <footer className={styles.container}>
            &copy; {currentYear} {name}'s Personal Dashboard
        </footer>
    );
});

export default Copyright;
