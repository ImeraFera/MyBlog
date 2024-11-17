

export const scrollBottom = (height) => {

    window.scrollBy({
        top: height,
        behavior: 'smooth',
    });

    console.log('kaydı')
}   