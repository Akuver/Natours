import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51J1RC0SDt5wrYTGRQFABnj4LlR8A07X5Jl1mYo1LJfIUAyjW5MI16Rel8ZbgYO1PNHaNhH018FLL9YxiyGHCj2vw001wZUOYtj'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
