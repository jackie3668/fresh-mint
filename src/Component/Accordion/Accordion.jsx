import React, { useEffect } from 'react'
import './Accordion.css'
import image from '../../Asset/UI/peppermint.png'
import plus from '../../Asset/UI/plus.png'
import minus from '../../Asset/UI/minus.png'

const Accordion = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.faq-q img')
    const questions = document.querySelectorAll('.faq-q h3')
    const handleIconClick = (e) => {
      const faq = e.target.closest('.faq');
      const answer = faq.querySelector('.faq-a')
      if (e.target.src === plus) {
        answer.classList.add('active')
        e.target.src = minus
      } else {
        if (answer) {
          answer.classList.remove('active')
        }
        e.target.src = plus
      }
    }

    const handleQuestionClick = (e) => {
      const faq = e.target.closest('.faq');
      const answer = faq.querySelector('.faq-a')
      if ( e.target.nextElementSibling.src === plus) {
        answer.classList.add('active')
         e.target.nextElementSibling.src = minus
      } else {
        if (answer) {
          answer.classList.remove('active')
        }
         e.target.nextElementSibling.src = plus
      }
    }

    icons.forEach(icon => {
      icon.addEventListener('click', handleIconClick)
    })

    questions.forEach(question => {
      question.addEventListener('click', handleQuestionClick)
    })
    return () => {
      icons.forEach(icon => {
        icon.removeEventListener('click', handleIconClick)
      })

      questions.forEach(question => {
        question.removeEventListener('click', handleQuestionClick)
      })
    }
  }, [])
  return (
    <div className='accordion'>
      <div className="faq-wrapper">
        <h1><img src={image} alt="" />FAQs</h1>
        <div className="faq">
          <div className="faq-q">
            <h3>What meal plans does FreshMint offer?</h3>
            <img src={plus} alt="Toggle Answer" />
          </div>
          <div className="faq-a">
            <p>FreshMint offers a variety of meal plans to suit different dietary preferences and goals, including weight loss, muscle gain, vegetarian, vegan, and gluten-free options. Each plan is customizable to align with your health objectives.</p>
          </div>
        </div>

        <div className="faq">
          <div className="faq-q">
            <h3>How often does the menu change?</h3>
            <img src={plus} alt="Toggle Answer" />
          </div>
          <div className="faq-a">
            <p>Our menu changes weekly to ensure variety and incorporate seasonal ingredients. Our team of chefs and nutritionists work together to create delicious, balanced meals that fit into your meal plan.</p>
          </div>
        </div>

        <div className="faq">
          <div className="faq-q">
            <h3>Is there a minimum subscription period?</h3>
            <img src={plus} alt="Toggle Answer" />
          </div>
          <div className="faq-a">
            <p>No, FreshMint does not require a minimum subscription period. Our flexible plans allow you to pause, cancel, or change your subscription at any time with no additional fees.</p>
          </div>
        </div>

        <div className="faq">
          <div className="faq-q">
            <h3>Can I select my delivery days?</h3>
            <img src={plus} alt="Toggle Answer" />
          </div>
          <div className="faq-a">
            <p>Yes, FreshMint offers the flexibility to choose your delivery days. During checkout, you can select the days that work best for you, and we'll ensure your meals arrive fresh on those days.</p>
          </div>
        </div>

        <div className="faq">
          <div className="faq-q">
            <h3>What measures does FreshMint take to ensure food safety?</h3>
            <img src={plus} alt="Toggle Answer" />
          </div>
          <div className="faq-a">
            <p>Food safety is our top priority. All our meals are prepared in a health department-approved kitchen by certified food handlers. We follow strict food safety protocols, including temperature control and sanitary handling, to ensure every meal is safe and of the highest quality.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Accordion