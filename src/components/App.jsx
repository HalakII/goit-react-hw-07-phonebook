import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { ContactsList } from './ContactsList/ContactsList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { SectionSubtitle } from './SectionSubtitle/SectionSubtitle';
import { ContactForm } from './Form/ContactForm';
import { ContactsFilter } from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <NotificationContainer />
      <SectionTitle title="Phonebook" />
      <ContactForm />
      <SectionSubtitle subtitle="Contacts" />
      <ContactsFilter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </div>
  );
};
