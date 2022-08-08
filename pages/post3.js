import SideNews from "../MUI and others/sideNews";

import ScrollUpButton from "react-scroll-up-button";

// export function NavbarP3(){
//     return(
//         <NavBar/>

//     )
// }

const Post3 = () => {
  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div id="homepageMain" style={{ marginLeft: "8%", marginRight: "8%" }}>
          <div
            style={{ backgroundColor: "white", marginTop: 30 }}
            id="homepageItem"
          >
            Home/Posts/Post1
            <div style={{ color: "#269BFF", paddingTop: 30 }}>HEALTH</div>
            <h1>Japan’s virus success has puzzled the world.</h1>
            <h3 style={{ color: "grey" }}>
              The property, complete with 30-seat screening from room, a
              100-seat amphitheater and a swimming pond with sandy shower…
            </h3>
            <img
              src="https://newsprk.quomodosoft.com/static/media/author2.88f6c866.png"
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid #555",
                width: 50,
                height: 50,
                marginTop: 20,
              }}
            />
            <div style={{ color: "black" }}>
              <strong> Shuvas Chandra</strong>
              <p style={{ color: "grey" }}>
                {" "}
                March 26, 2020Updated 1:58 p.m. ET
              </p>
            </div>
            <img
              src="https://newsprk.quomodosoft.com/static/media/single_post1.e5947bbb.jpg"
              alt=""
            />
            <p />
            Entilators will be taken from certain New York hospitals and
            redistributed to the worst-hit parts of the state under an order to
            be signed by Governor Andrew Cuomo.
            <p>
              New York saw its highest single-day increase in deaths, up by 562
              to 2,935 - nearly half of all virus-related US deaths recorded
              yesterday. The White House may advise those in virus hotspots to
              wear face coverings in public to help stem the spread.
            </p>
            <p>The US now has 245,658 Covid-19 cases.</p>
            <p>
              A shortage of several hundred ventilators in New York City, the
              epicentre of the outbreak in the US, prompted Mr Cuomo to say that
              he will order the machines be taken from various parts of the
              state and give them to harder-hit areas.
            </p>
            <p>
              Amid a deepening crisis, top health official Dr Anthony Fauci has
              said he believes all states should issue stay-at-home orders.
            </p>
            <p>
              “I don’t understand why that’s not happening,” Dr Fauci told CNN
              on Thursday. “If you look at what’s going on in this country, I
              just don’t understand why we’re not do ingthat.”
            </p>
            <p>
              “You’ve got to put your foot on the accelerator to bring that
              number down,” he added, referring to infection and death rates.
            </p>
            <ul>
              <strong>
                <p>
                  <li>Should more of us wear face masks?</li>
                </p>
                <p>
                  <li>Why some countries wear face masks and others don’t</li>
                </p>
                <p>
                  <li>Coronavirus: Are homemade face masks safe?</li>
                </p>
              </strong>
            </ul>
            <p>
              The comments from Dr Fauci, who heads the National Institute of
              Allergy and Infectious Diseases, appeared to contradict those of
              President Trump, who has consistently dismissed the notion of a
              nationwide lockdown.
            </p>
            <p>
              “It’s awfully tough to say, ‘close it down.’ We have to have a
              little bit of flexibility,” Mr Trump said on Wednesday.
            </p>
          </div>
          <div id="homepageItem">
            <SideNews />
          </div>
        </div>
      </div>
      <ScrollUpButton style={{ backgroundColor: "#FF5555" }} />
    </>
  );
};

// export function FooterP3(){
//     return(
//         <>
//                 <Footer/>

//         </>
//     )
// }

export default Post3;
