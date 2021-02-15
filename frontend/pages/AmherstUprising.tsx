import styled from 'styled-components'
import { Bar } from 'react-chartjs-2'

const data3 = {
  labels: ['Asian American', 'Black', 'Latinx', 'Native American', 'White', 'Low-Income', 'First-Gen', 'All'],
  datasets: [
    {
      label: 'Discplinary Dismissal',
      backgroundColor: 'rgba(210, 207, 205, 1)',
      data: [0.2, 0.2, 0.2, 0.0, 0.1, 0.1, 0.2, 0.1],
      borderWidth: 1,
    },
    {
      label: 'Academic Dismissal',
      backgroundColor: 'rgba(183, 165, 211, 1)',
      data: [0.3, 2.1, 2.2, 1.7, 1.0, 0.6, 1.5, 2.4, 1.0],
    },
  ],
}

const data2 = {
  labels: ['Black', 'Latinx', 'First-Gen', 'Low-Income Students', 'All'],
  datasets: [
    {
      label: 'Black Underrepresentation in Majors',
      data: [2.1, 2.2, 2.4, 1.5, 1.0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(100, 223, 235, 0.2)',
        'rgba(0, 153, 188, 0.2)',
        'rgba(63, 31, 105, 0.2)',
        'rgba( 223, 114, 61, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const data = {
  labels: [
    'Economics',
    'Math',
    'History',
    'Computer Science',
    'Biology',
    'Chemistry',
    'Physics',
    'Enviromental Studies',
    'Music',
    'Geology',
  ],
  datasets: [
    {
      label: 'Black Underrepresentation in Majors',
      data: [-38, -28, -18, -15, -10, -9, -9, -7, -7, -6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(100, 223, 235, 0.2)',
        'rgba(0, 153, 188, 0.2)',
        'rgba(63, 31, 105, 0.2)',
        'rgba( 223, 114, 61, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(100, 223, 235, 1)',
        'rgba(0, 153, 188, 1)',
        'rgba(63, 31, 105, 1)',
        'rgba( 223, 114, 61, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const Wrapped = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(80ch, 100%)
    1fr;
  font-family: 'URWBaskervilleW01-Regular';
  /* This past November marked the fifth anniversary of Amherst Uprising, a multi-day sit-in of Frost Library led by students who that demanded attention and change surrounding racism on campus. Yet for many, the Uprising never ended — and, it didn’t begin in November 2015. Rather, it marked just a moment in a decades-long struggle for racial justice and Black equality within the institution. The activism bred by Amherst Uprising was not new or unprecedented, but embodied traditions set by Amherst students in the decades prior to the 2015 sit-in. In the spring of 1969, for instance, the college experienced two moratoriums on classes — one initiated by the college to reflect on the Vietnam War, civil rights and coeducation in light of uprisings at Columbia and UC Berkeley;, another staged by the Afro- American Society to address the role of racism on campus. With these Out of the moratoriaum came the college’s Black studies department, which was approved by the faculty voted in favor of that spring and officially founded two years later in 1971. Or take the divestment movement of the late 1970s, in which Amherst students pressed the college to pull investments from apartheid in South Africa. Students succeeded and, which the college fully divesteding in 1985. The 2015 sit-in was not an isolated moment — Uprising has continually happened at the college, and will continue to happen. */

  /* Body Text */
  font-family: Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1em;
  line-height: 172%;

  & blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }

  & > * {
    grid-column: 2;
    margin-bottom: 34px;
  }
`

const FullBleed = styled.div`
  width: 100%;
  grid-column: 1 / 4;
`
const ArticleImage = styled.img`
  width: 100%;
`
const FullBleedImage = styled.div`
  width: 100%;
  grid-column: 1 / 4;
  position: relative;
  min-height: 65vh;
  margin: 0 auto;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url('https://acdc.amherst.edu/api/object/asc:983830/MEDIUM_SIZE');
`

const FullBleedImage2 = styled.div`
  width: 100%;
  grid-column: 1 / 4;
  position: relative;
  min-height: 65vh;
  margin: 0 auto;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url('asc-880586 (1).jpg');
`

const FullBleedImageContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Blockquote = styled.blockquote`
  font-family: Cormorant;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 87px;
  text-align: center;
  color: #3f1f69;
`
const BlockquoteL = styled.blockquote`
  background: #f9f9f9;
  border-right: 10px solid #ccc;
  border-left: 0px solid #ccc !important;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  text-align: right;
`

const FigCaption = styled.figcaption`
  font-family: Halyard Text;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */
  text-align: center;

  color: rgba(0, 0, 0, 0.4);
`
function AmherstUprising() {
  return (
    <>
      <header>
        <h1>Hi!</h1>
      </header>
      <Wrapped>
        <p>
          This past November marked the fifth anniversary of Amherst Uprising, a multi-day sit-in of Frost Library led by students who
          demanded attention and change surrounding racism on campus. Yet, for many, the Uprising didn’t begin — or end — in the confines of
          the library foyer five years ago. Rather, it marked just a moment in a centuries-long struggle for racial justice and Black
          equality within the institution.
        </p>
        <p>
          The activism bred by Amherst Uprising was not new or unprecedented but embodied traditions set by Amherst students in the decades
          prior to the 2015 sit-in. In the spring of 1969, for instance, the college experienced two moratoriums on classes — one initiated
          by the college to reflect on the Vietnam War, civil rights and coeducation in light of uprisings at Columbia and UC Berkeley; and
          another staged by the Afro-American Society to address the role of racism on campus. With these moratoria came the college’s Black
          studies department, which was approved by the faculty that spring and officially founded two years later in 1971. Or take the
          divestment movement of the late 1970s, in which Amherst students pressed the college to pull investments from apartheid in South
          Africa. Students succeeded, and the college fully divested in 1985. The 2015 sit-in was not an isolated moment — Uprising has
          continually happened at the college, and will continue to happen.
        </p>
        {/* 
  <FullBleedImage>
    <FullBleedImageContent>
      <p>“It's about the future, as much as the past.” </p>
      <span></span>
    </FullBleedImageContent>
  </FullBleedImage>
  */}
        <figure>
          <Blockquote>“It's about the future, as much as the past.”</Blockquote>
          <FigCaption>
            —Ellis Phillips-Gallucci ’23, <br />
            historian of the Black Student Union (BSU)
          </FigCaption>
        </figure>
        <p>
          By now, the history of Amherst Uprising is one that has been told and re-told so many times that the story of the sit-in of
          solidarity-turned-personal-storytelling-event is one that has become deeply embedded in the psyche of the institution and its
          students. Our role is not to retell that story. Rather, The Student strives to highlight the roots of the uprising, the legacy of
          its demands and what they represent five years later.{' '}
        </p>
        <FullBleedImage>
          <FullBleedImageContent>
            <blockquote>
              “In Amherst Uprising, to me, there wasn't anything super radical or revolutionary being asked. I think they were very baseline
              demands...If you look at Uprising’s demands, at Integrate Amherst’s demands, at Reclaim Amherst —, if you look at all of those
              movements, A lot of what's being asked on behalf of the administration are the same things that were asked [in the]1980s. I
              think that it can be a little bit disheartening when you see the same things being asked for almost 50, years later.”
            </blockquote>
          </FullBleedImageContent>
        </FullBleedImage>
        <p>
          Uprising produced a list of concrete demands as the product of the sit in. Read the full list of demands on Uprising’s website. In
          brief, they asked:
        </p>
        <ol>
          <li>
            President Biddy Martin & Cullen Murphy ’74, the then-chairman of the board of trustees, to each apologize for the harms brought
            upon students from the college’s “institutional legacy of white supremacy.” Martin to apologize to faculty, staff and
            administrators of color and allies, who were not “provided a safe space for them to thrive.”
            <ul>
              <li>
                Update: This past summer, in 2020, Martin issued an official apology for the harms and violence that Black students and
                students of color experience while attending a predominantly white institution.
              </li>
            </ul>
          </li>
          <li>
            The Amherst College Police Department (ACPD) to commit to protect and refrain from violence in connection with the protest.
          </li>
          <li>
            Martin to denounce{' '}
            <a href="https://amherststudent.amherst.edu/article/2014/10/29/administration-addresses-all-lives-matter.html">
              “All Lives Matter” and “Free Speech”
            </a>{' '}
            posters hung around campus and to alert the responsible students that they may face disciplinary action including racial and
            cultural competency training.
          </li>
          <li>
            A commitment to revise the Honor Code to include a zero-tolerance policy on hate speech.
            <ol>
              <li>A commitment to revise the Honor Code to include a zero-tolerance policy on hate speech</li>
            </ol>
          </li>
          <li>A commitment to revise the Honor Code to include a zero-tolerance policy on hate speech</li>
          <li>Communication with alumni regarding the events of the Uprising and a condemnation of racist responses to the events.</li>
          <li>Space to discuss the Uprising in classroom settings.</li>
        </ol>
        <p>
          Martin, as Murphy described in a 2016 letter, “declined to consider the original demands item by item. She explained that issuing
          apologies would be ‘misleading, if not downright dishonest’ and that reacting to ultimatums would represent ‘a failure to take our
          students seriously.’ Rather, Martin said, she chose to respond to the spirit of what students were trying to achieve.”
        </p>
        <p>
          As students discussed with administrators and each other to define the “spirit” of the movement, they continued to refine and
          evolve their goals — even from their onset, the asks of Amherst Uprising have been iterative. This later version of goals outlined
          the need for programs like cultural competency training, a Latin American, Caribbean and Latino Studies and an Asian Languages and
          Civilizations Studies major and more faculty, staff and administrators of color across departments.{' '}
        </p>
        <p>Two of the largest changes born out of the Uprising and subsequent collaboration with administration were: </p>
        <ul>
          <li>the institution of the Mammoth as the new mascot</li>
          <li>
            the creation of the Office of Diversity and Inclusion (now the Office of Diversity, Equity and Inclusion) and the hiring of Norm
            Jones to lead that office.{' '}
          </li>
        </ul>
        <p>Below are additional demands made in the aftermath of the Uprising, along with their updates five years later.</p>
        <ul>
          <li>
            Demand: Create a Latin American, Caribbean and Latino Studies major.
            <ul>
              <li>
                Update: In April 2017, a committee of Latin American studies professors submitted a proposal for a Latinx and Latin American
                studies major (LLAS). The major was approved soon after, with the program debuting that fall.{' '}
              </li>
            </ul>
          </li>
          <li>
            Demand: Expand and reform the Asian Languages and Civilizations Studies (ASLC) major.
            <ul>
              <li>
                Update: The Asian American Studies Working Group (AASWG) has amped up its calls for an Asian American studies major, noting
                its distinction from ASLC. “The need for a robust civil society, attentive to contemporary issues, and committed to public
                service has never been greater. Continuing to neglect AAS would do a disservice both to Amherst students and the larger
                American public,” the AASWG wrote in an op-ed in The Student.{' '}
              </li>
            </ul>
          </li>
          <li>
            Demand: Ensure that the varsity recruitment process reflects and retains the intersectional diversity of the campus.
            <ul>
              <li>
                Update: The Council of Amherst College Student Athletes of Color (CACSAC) has worked with the Office of Financial Aid to
                provide financial aid pre-reads to prospective student athletes.
              </li>
            </ul>
          </li>
          <li>Demand: Extend resources to undocumented, Deferred Action for Childhood Arrivals and international students</li>
          <li>
            Demand: Commit to increasing the number of staff and administrators of color in the Counseling Center, Office of Financial Aid,
            Office of Alumni and Parent Programs, Health Center, Career Center and Writing Center, and faculty of color within all academic
            departments; Hire more faculty of color on tenure track lines within all departments
            <ul>
              <li>
                Though the college has committed to hiring more faculty of color, challenges with retention and tenure remain, reports
                Shawna Chen ’20. As of Fall 2020, there were 48 tenure-track faculty of color, or about 23 percent. Of those 48, 12 are
                Black, 12 are Latinx, 19 are Asian American and 5 are multi-racial. For context, there were 137 white, non-Hispanic
                tenure-track professors. Initiatives to hire more staff of color have moved more slowly, Martin said in an Uprising oral
                history.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Some of the change Uprising ushered in cannot be quantified in a list. In an oral history compilation on the Amherst Uprising
          website, students expressed that part of the power in the movement came from simply having the space to discuss experiences shaped
          by race, gender, sexuality, ethnicity and socio-economic identities in a setting larger than a friend group or online group chat,
          to an audience that included white peers. While the change is slow, students do notice a shift, that the openness of conversation
          experienced at Uprising has persisted.
        </p>
        <figure>
          <blockquote>
            Though the college has committed to hiring more faculty of color, challenges with retention and tenure remain, reports Shawna
            Chen ’20. As of Fall 2020, there were 48 tenure-track faculty of color, or about 23 percent. Of those 48, 12 are Black, 12 are
            Latinx, 19 are Asian American and 5 are multi-racial. For context, there were 137 white, non-Hispanic tenure-track professors.
            Initiatives to hire more staff of color have moved more slowly, Martin said in an Uprising oral history.
          </blockquote>
          <figcaption>— Ayodele Lewis ’21, Chair of the Black Student Union (BSU) </figcaption>
        </figure>
        <p>
          Yet, even with some progress, students and alumni still know the college is still far from realizing the extent of Uprising’s
          asks:{' '}
        </p>
        <p>Ayodele Lewis: “That the actual concrete goals of Amherst Uprising weren't really met in these past few years.” </p>
        <p>
          “I think that Amherst Uprising, and the immediate aftermath kind of allowed the school a complacency, especially coming in in 2017
          as we saw racism across the country grow. The school was able to say, ‘Oh, well, we formed the Student Committee on Diversity and
          bolstered [the Office of Diversity and Inclusion] (OD&I).’ And yeah, those things don't — didn't — really make a difference in the
          daily life of Black students.”
        </p>
        <figure>
          <blockquote>
            “I think most importantly, what [Amherst Uprising] did was teach this generation of Amherst, students, alumni and community
            members that the work is not done — similar to what happened in 2020, in terms of racial justice in the country. I just think it
            was a good sort of reminder and accountability factor, just for the whole community to say ‘Yes we've made strides from 1821,
            1901, 1965, 1998, and we've made strides in terms of racial equity and inclusion among the students, staff and faculty but we're
            not quite there.’”
          </blockquote>
          <figcaption>— Kyndall Ashe ’18 </figcaption>
        </figure>
        <ArticleImage src="editorial.png" />
        <figure>
          <blockquote>
            “It's important to continue to not be complacent, to celebrate the past as we move forward and to honor and respect those who
            have given their all in carrying this torch and, as you take the torch yourself, to remember them.”
          </blockquote>
        </figure>
        <figure>
          <blockquote>
            “I hope [Uprising was] not a stand-alone event, but it surely won't be a stand-alone event, if we don't make changes. The
            purpose of it wasn't like ‘oh let's do this fun little sit-in and tell Biddy we want these things.’ Students are suffering. The
            number of Black students going on leave who don't come back is too high; the number of Black students that don't graduate
            compared to whites, it is too high; the violence against Black students in certain subfields is too high. These problems really
            persist, and there's nothing else we can think about doing. We've sat down in meetings, we sat down as a BSU, with different
            administrators, different students have come forward and whatever other bureaucratic ways, and none of those worked. So we were
            compelled to literally take over a building. That's not flowers and sunshine and rainbows thing, and no protest is.” — Kyndall
            Ashe ’18
          </blockquote>
        </figure>
        <p>Learn more about these rates of academic leave and dismissal here</p>
        <FullBleedImage2>
          <FullBleedImageContent>
            <h2>Relay Race of Change</h2>
          </FullBleedImageContent>
        </FullBleedImage2>
        <p>
          “It's really a relay race: Someone ran their lap, they pass you the baton. You got to run your lap, be a good teammate, make sure
          that you don't lose your lead and that you pass the baton off smoothly to that next person. We’re all running this race together.”
          —Ayodele Lewis
        </p>
        <p>Understanding Uprising requires looking back just as much as it requires facing forward.</p>
        <figure>
          <blockquote>
            “The most important thing that we need to understand is just the historical context. I think just understanding the current
            moment can only be made sense of through the past moments, first of all. And so I think that to move forward, we need to first
            make sure we understand what came first, where we are right now.” — Ellis Phillips-Gallucci ’23
          </blockquote>
        </figure>
        <p>
          The short institutional memory of colleges — where students, their historical knowledge and their lessons learned move on from the
          institution by the time they’ve learned them — has long been an obstacle to this focus on using the past to inform the future.
          Today’s students are making strides to correct that.
        </p>
        <blockquote>
          “For the most part, whatever effort you put in in four years you're either going to see the rewards or not. If you don't, you're
          out and by the time you're out, who knows if the students who follow you are carrying on the same [efforts]. I think that little
          cycle has really allowed for there to be significantly less progress in terms of racial equity than maybe we all want to believe.”
          — Joelle Crichlow ’22, former BSU chair
        </blockquote>
        <p>
          To Lewis, correcting that means setting the stage and preparing the next generation of BSU members to continue carrying the torch.
          It also means strengthening alumni relations and inviting Black alumni back to meet and know current students.
        </p>
        <p>
          “It will be our job, now that we have freshmen within the leadership of BSU, to share these stories, to be candid and open with
          them so that they can know these stories and share them with the freshmen when they're seniors — the freshmen that come in in 2025
          — so that these stories can be passed down and remembered, so that the [relay] race can continue.” — Ayodele Lewis
        </p>
        <p>
          “I see my friends that are sophomores, sort of as role models to me... I would say that the biggest reason why I'm so involved
          with BSU or [the Association of Amherst Students (AAS)] is because they are. To see them actively move towards the change that
          they want to see [is influential]... Being able to see older students — or at least students that are a year ahead of me — really
          work towards the change that they want to see is very inspiring for me to work towards the change I want to see. I want to be able
          to do that for the students as I get older.” — BlairChase ’24,JuniorChairofBSUBlackMen’sGroupandAASsenator
        </p>
        <p>
          Even with the vast challenges and hardship Covid has brought — to America’s Black population especially — it has also forced an
          opening for closeness among the students who are on campus: “It's given us an opportunity, especially as sophomores... we've had
          to almost single-handedly (there are some people on campus who are upperclassmen, of course) take on the Black population of
          freshman, and we had to look after them — or not look out for them but, you know, help them understand their place and show them
          the ropes.” — Ellis Phillips-Gallucci
        </p>
        <p>
          “I want to make sure I'm recognizing what's happening now, and connecting it back to what has happened in the past because if
          anything, we [alumni] can help not reinvent the wheel.”“I really hope that no one ever forgets what [Uprising] felt like. But I do
          at the same time, recognize it's important to continue to learn about what's happening today and the pieces that we can pull from
          that, that are going to resonate with students today. I think moving forward you don't want to lose the next generation. I don’t
          want to ever ignore what’s happening in Senate or in BSU or with current students.” — Kyndall Ashe
        </p>
        <h2>Moving Forward</h2>
        <p>
          2020 saw the next generation of anti-racism come to a head. In the wake of on-campus hate speech in March and national protests
          surrounding police brutality in June, students and alumni launched Integrate Amherst and Reclaim Amherst, respectively. Both
          campaigns outline steps for the college to become a more equitable, anti-racist institution. The goals of each echoed many seen
          just five years earlier in Amherst Uprising, and many — like the ask for a formal apology from the administration for the harms of
          attending a white institution or the inclusion of an explicit condemnation of hate speech in the Honor Code — have only now been
          realized, with the additional push of these movements.
        </p>
        <figure>
          <blockquote>
            We can only understand [Reclaim] in the context of a post Uprising time as well. I think the really important thing about
            Uprising is that there's always a level of dissatisfaction, and people will always feel they want things to change, but making
            that into real, concrete action is something, which I think is much more revolutionary. It's a statement, a verbal commitment to
            it... Just the moment itself has potential, and Reclaim itself. I think that if everyone were on campus in the fall, I think
            that Reclaim is a different moment. But, just the fact that it arose as an idea and [became] concrete was ​something​, and a
            historical marker. As a historian, I have to ask ‘Why reclaim, and I’m always going to have to look at Uprising first to
            understand that.” — Ellis Phillips-Gallucci
          </blockquote>
        </figure>
        <p>
          In August, the administration published a comprehensive, ​17-point anti-racism plan​ responding to the vision outlined by Reclaim
          Amherst, with built-in accountability metrics like a timeline and public community updates​ on the plan’s status. Key to the
          process of instituting those proposed changes, two new committees have been put in place: a faculty leadership committee as well
          as a student advisory group.
        </p>
        <p>
          While the formation of committees and task forces is an essential first step in opening communication and creating spaces to
          discuss policy changes, it must go hand-in-hand with tangible actions, as many student activists, working to make Amherst more
          equitable, have expressed.
        </p>
        <p>
          “Okay so what's the next step? We have this committee; it's great to be able to talk about these things, but like where is the
          tangible change coming from?”
        </p>
        <figure>
          <blockquote>
            “My question still is: I've served on the committee for a semester, so now, what is coming out of this? We've been able to meet
            with different people; we've been able to voice concerns; we've been able to tell President Martin ‘This is something you should
            look into.’ And it's like, ‘Oh yeah, I'll follow up on that.’ But like at the end of the day, what additional steps are being
            taken with the information that President Martin now has, that the administration has. Whoever has it — what is being done with
            it?” — Joelle Crichlow
          </blockquote>
        </figure>
        <p>
          Yet now with the anti-racism policy plans unfurling according to its timeline, there is a moment to shift away from advocacy and
          focus more on implementation.
        </p>
        <figure>
          <blockquote>
            “I think, for me, the first thing that I'll kind of want to see, or the thing that I want to see come June is just for Amherst
            itself, as the institution, to follow through, even just on some of the Reclaim policies: Black faculty, Black student
            admissions, etc. I think we just want to see where the college is willing to bend and stuff like this, because we don't want
            them to just co-opt our grammar; we don't want them to give us concessions. We just want them to act, to act in a concrete way.
            I think then we can see where the college is at, in terms of listening to students and listening to its faculty, and in its
            willingness to hear the voices of the students. Everything regarding the pivot will really be there because if they don't act,
            and we don't see this follow through, I think we're gonna continue to see this kind of a pent-up compulsion to feel frustrated
            with the school. If they do act, then I think there also will be a change. It depends if they do it to kind of satiate the
            students and say, ‘Okay, here's your thing. We're not going to make any more
            realchanges,’oriftheydoit,andthenstudentscontinuetopress.”— EllisPhillips-Gallucci
          </blockquote>
        </figure>
        <p>
          Outside of the tangible policy changes to come, many students are now focusing on the student-to-student community building work
          that itself can lead to change, however abstract that may be.
        </p>
        <p>
          “I just [want] to make sure that every student is afforded the same amount of care from the administration but also from their
          peers”
        </p>
        <figure>
          <BlockquoteL>
            “My overall mission [as junior chair of the Black men’s group] is to make sure that Black students — Black men, in particular —
            can feel as comfortable on Amherst’s campus as possible..... [I hope to] be a bit of a friendly face for Black men on campus,
            and to offer support in any way I can... So to have a group that focuses specifically on Black students, I think is integral
            [for progress].” — Blair Chase
          </BlockquoteL>
        </figure>
        <p>
          Social media, like BSU’s own instagram page or @BlackAmherstSpeaks, which took off this summer as students shared their personal
          stories of experiencing racism at the college, has proven an invaluable tool in bridging community when physical interactions
          cannot.
        </p>
        <p>
          Sirius Wheaton ’23 runs the BSU social media: “I think that really ​is​ the point of the BSU, and the BSU Instagram — the basic
          idea of account is to connect people to make people know this is a space where we all can feel welcome and things like that.”
        </p>
        <div>
          <h2>Black Underrepresentation in Majors </h2>
          <Bar
            data={data}
            options={{
              maintainAspectRatio: true,
              legend: {
                display: false,
                suggestedMin: 0,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      suggestedMin: 0,
                    },
                  },
                ],
              },
            }}
          />
        </div>

        <div>
          <h2>Academic Dismissal </h2>
          <Bar
            data={data2}
            options={{
              maintainAspectRatio: true,
              legend: {
                display: false,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      suggestedMin: 0,
                      callback: function(value, index, values) {
                        return value + '%'
                      },
                    },
                  },
                ],
              },
            }}
          />
        </div>

        <div>
          <h2>Dismissals</h2>
          <Bar
            data={data3}
            options={{
              maintainAspectRatio: true,
              legend: {
                display: true,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      suggestedMin: 0,
                      callback: function(value, index, values) {
                        return value + '%'
                      },
                      stacked: true,
                    },
                  },
                ],
                xAxes: [
                  {
                    stacked: true,
                  },
                ],
              },
            }}
          />
        </div>
      </Wrapped>
    </>
  )
}

export default AmherstUprising
