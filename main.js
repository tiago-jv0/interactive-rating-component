const submitButton = document.querySelector('[data-submit-button]')
const introView = document.querySelector('[data-intro-view]')
const resultView = document.querySelector('[data-result-view]')
const showResult = () => {
    introView.classList.add('content-hidden')
    resultView.classList.remove('content-hidden')

    const ratings = document.querySelectorAll('input[name="rating"]')
    let ratingResult = 0

    ratings.forEach((rating) => {
        if(rating.checked){
            ratingResult = rating.value
        }
    })


    const ratingsResultElement = document.querySelector('[data-rating-result]')
    ratingsResultElement.textContent = `You selected ${ratingResult} out of 5`
}

submitButton.addEventListener('click', showResult)