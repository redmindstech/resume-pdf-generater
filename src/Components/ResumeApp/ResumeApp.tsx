import "./ResumeApp.scss";
import NavigationApp from "../NavigationApp/NavigationApp";
import HeaderApp from '../HeaderApp/HeaderApp';
import FooterApp from '../FooterApp/FooterApp';
import MainApp from '../MainApp/MainApp';

function ResumeApp() {
    // if the headerApp is clicked then we show template 
    // grid-template-rows: 70% auto auto auto auto auto 10% 5%;
    // else if template is hit again or the template then we show the forms
    // grid-template-rows: 10% auto auto auto auto auto 10% 5%;
    return (
        <div className="resume-app">
            <section className="resume-app-grid">
                <HeaderApp/>
                <NavigationApp />
                <MainApp/>
                <FooterApp/>
            </section>
        </div>
    );
}

export default ResumeApp;
