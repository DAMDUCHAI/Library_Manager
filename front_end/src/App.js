
import './App.css';
import {React,Fragment} from 'react'
import { Switch,  } from 'react-router-dom';
import { HomeAdminTemplates } from './templates/HomeAdminTemplates/HomeAdminTemplates';

import DashboardComponents from './components/Admin/DashboardComponents';
import BookComponents from './components/Admin/BookComponents';
import CategoryComponents from './components/Admin/CategoryComponents';
import AuthorComponents from './components/Admin/AuthorComponents';
import PublisherComponents from './components/Admin/PublisherComponents';
import DrawerLibrary from './HOC/LibraryHOC/DrawerLibrary';
import LoadingComponents from './components/LoadingComponents.js/LoadingComponents';
import ReaderComponents from './components/Admin/ReaderComponents';
import ModalLibrary from './HOC/LibraryHOC/ModalLibrary';
import AboutUsComponents from './components/AboutUs/AboutUsComponents';

import ListBookReader from './components/Reader/ListBookReader';

import LoginComponents from './components/Login/LoginComponents';
import { LoginTemplates } from './templates/LoginTemplates/LoginTemplates';
import { HomeReaderTemplates } from './templates/HomeReaderTemplates/HomeReaderTemplates';
import FeedbackComponents from './components/Admin/FeedbackComponents';
import MoneyComponents from './components/Admin/MoneyComponents';
import RulesComponents from './components/Admin/RulesComponents';
import StaffComponents from './components/Admin/StaffComponents';
import BookshelfComponents from './components/Admin/BookshelfComponents';
import BookCardComponents from './components/Admin/BookCardComponents';



function App() {
  return (
<div>
<DrawerLibrary/>
<LoadingComponents/>
<ModalLibrary/>

<Switch>
<HomeAdminTemplates path="/dashboard" exact Component={DashboardComponents}/>
<HomeAdminTemplates path="/" exact Component={DashboardComponents}/>
<HomeAdminTemplates path="/book-manager" exact Component={BookComponents}/>
<HomeAdminTemplates path="/category-manager" exact Component={CategoryComponents}/>
<HomeAdminTemplates path="/author-manager" exact Component={AuthorComponents}/>
<HomeAdminTemplates path="/publisher-manager" exact Component={PublisherComponents}/>
<HomeAdminTemplates path="/reader-manager" exact Component={ReaderComponents}/>
<HomeAdminTemplates path="/feedback-manager" exact Component={FeedbackComponents}/>
<HomeAdminTemplates path="/book-card-manager" exact Component={AboutUsComponents}/>
<HomeAdminTemplates path="/about-us" exact Component={AboutUsComponents}/>
<LoginTemplates path='/login' exact Component={LoginComponents} />
<HomeReaderTemplates path='/home' exact Component={ListBookReader} />
<HomeAdminTemplates path="/punishment-money" exact Component={MoneyComponents}/>
<HomeAdminTemplates path="/rules-manager" exact Component={RulesComponents}/>
<HomeAdminTemplates path="/staff-manager" exact Component={StaffComponents}/>
<HomeAdminTemplates path="/bookshelf-manager" exact Component={BookshelfComponents}/>
<HomeAdminTemplates path="/book-card" exact Component={BookCardComponents}/>
</Switch>

</div>

  );
}

export default App;
