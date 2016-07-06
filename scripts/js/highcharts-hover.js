function showPostIt(point) {
  var $postit = $('.content .sidebar .postit');

  $postit.css('background-color', point.color);

  $postit.find('.series').text(point.series.name);
  $postit.find('.possibility').text('Possibility ' + point.possibility);
  $postit.find('.priority').text('Priority ' + point.priority);
  $postit.find('.statement').text(point.statement);

  if (point.question) {
    $postit.find('.question').show();
    $postit.find('.question').text(point.question);
  }
  else {
    $postit.find('.question').hide();
  }
}

var categoryData = {"Community":["Collaboration","Careful and thoughtful organization of \"moving parts\"","Engagement with CS community both Ed and Industry","Balance of varied stakeholder interests","Collaboration and communication inside city","CSNYC as the sensemakers coordinator and broker of all research initiatives","Bringing in other non-school based support\/resources\/support providers (NYC is a rich ecosystem)","How can the data and findings from various focus strands be utilized to inform one another","Connections to the industry","Collaborations between sectors","Opportunities to build upon and connect CS experiences","Importance of defining 'meaningful learning experience'","How can this initiative be communicated to students, teachers and admin effectively?","How do students, teachers, and parents conceptualize CS currently","Some student and parent groups will consider CS irrelevant and need to be pursuaded","Connection and Influence Nationally","Collaboration and Communication outside city","Cross city learning","Community of practice","Teacher PD","How do you create a coherent CS-rich and meaningful experiences for a highly mobile student population?","NYC using tested CS programs in over 100 schools already","Need a common understanding of \"must have\" CS content\/skills\/resources","Partnerships and Resources","Private Partnerships","How do we bridge K-12 to 13-16","Providing informal pathways and career paths","Tech reliability","That the companies give us money but (shouldn't) don't have too much say in how it rolls out!","Beyond jobs - creativity, making, reasoning skills","What's the capacity of CS4All to transform the tech industry?","That academics think we should construe CS broadly\/more conceptually when thinking about what all kids need to know","Ideologies behind why we teach CS and what we teach are important"],"Curriculum":["Some students might just get one \"unit\"","Connections across units in elementary, middle, and HS","CS might become a place for digital literacy through making with code","How can we integrate CS into curriculum","Too Computer Science centric (focus)","What is meaningful high quality CS?","What is K-8 CS?","What do we do in K-8?","What is CS? What isn't?","CS Blueprint Development across K-12","Define meaningful learning experience","The scope of the initiative is 3 units and that is still being defined","We know very little about elementary CS","The organizing concepts of the framework may not be useful for CS K12","Getting learners interested is not the same as getting them prepared","Building broader knowledge base and research based around effective CS teaching and learning","Avoid repetition of same, rudimentary learning experiences, no progression","Real diversity of opinion about what\/how to teach - maybe not informed by CS","Where does it fit?","What roles do young learners serve in K-12 CS education? What roles could they serve?","Curriculum","Connection to STEM","Blueprint","Topics","Variety of strong curricular models","What counts as a unit is unclear","Approach to CS of multiple models\/adaptations","CS4All is about kids understanding the world around them","How do we define computer science?","Programming should be a central part of the K-12 CS ed experience","This work isnt just a vision of stand alone CS courses - we need to think about integration","What gets removed from K-12 as a result","Defining what \"high quality\" teacher training looks like","Defining what \"high quality\" means in the classroom","How will \"robust\" unit be defined? Can it be a participatory process?","Need to define \"meaningful\" events","Integrating CS into other disciplines","Important to me - content vs. CS pedagogy","Important to me - What is a meaningful experience look like?","Curricula\/Framework designs for CS integration","Relationship between career-track CS and \"appreciation\" CS","Define CS for teachers","Ambiguity about what counts as a meaningful learning experience in CS","K-3 Curriculum and Integration","That there are positive effects on students CS skills at even the elementary school level","K-4","How to implement CS into elementary school level curriculum","Elementary is least far along in curricular development","What constitutes computer science? (as a course)","What \"meaningful CS experience\" means","Defining what is a \"meaningful\" CS experience","3 meaningful CS experiences for EVERY student"],"Equity":["Equity of access and high quality CS programming across schools","Ensuring equity of access and participation, including drawing in the potentially more reluctant schools","What alternate pathways of interest exist beyond a student studying CS or entering into a CS career.","Effective pedagogy for diverse students","Just because a school is diverse, doesnt mean their CS courses will be","We need to focus on both an equitable\/diverse pipeline and ways to sustain students once in CS courses","Students change schools. How do you build CS knowledge?","Increase exposure to CS for all students","Ensure all students are reached with CS units","Big issues in K-12, Student Diversity","Pedagogy for diverse student population","Providing underrepresented schools, enough materials, supports","What about a kid who transfers in from another district?","Equity (All Students)","Equity of resources availability - How will we use past research to direct future efforts","Equity of Participation and Outcomes","How to strive toward equity and not reinforce existing inequity","How \"for all\" impacts groups and what equity looks like","CS in NYC quality, implementation, for all (not just CS for all)","The evaluation is evolving","Broadening participation is key for students and teachers","Promoting equity in how CS learning opportunities are distributed","Equity, Pipeline, interest","CS4All really means all!","Making sure under resourced schools don't get underresourced CS","All Bouroughs do not equal manhattan","All students can learn CS","CS will be implemented consistently (at least \"for all\") in each school","How does CS address a variety of learner exceptionalities?","Designing CS education from a UDL perspective","Just because a learning opportunity is in a school does not mean that its reaching all learners","Broadening participants in CS","How to support underrepresented groups","Starting with students identities and their strengths, challenges, and interests","What does CS4All mean?","All students  ","How to guarantee diversity of TEACHERS","High level of interest is CS among african americans","Student pathways","Lack of K-5 CS","What will student pathways be in 10 years?","Assessment of student learning","Understanding preparation for future work in CS = College and Career","Measuring early activation twoards CS = student interest","Equity  ","Hispanic interest in CS growing fast","Ensuring opportunities and recruitment with diverse URM students","Need more support for diversifying CS pipeline","Students with disabilities","Intersectionality","NYC Public Schools diversity and impact on CS education","There will be an \"all flowers bloom\" approach to the rollout","Ensuring underrepresented communities have equal access","How do you guarentee this gets to the most challenged schools and students, who have been most underrepresented and underresourced?","All students  ","Very diverse types of CS learning opportunities","Equity of opportunities"],"Implementation":["Parent Involvement","Improvement science focus at DOE","What are the shared understandings about the goals of the CS4All initiative? What are the differences?","What mechanisms can be used? How might we collectively determine what purposes and associated ideologies should guilde CS4All in NYC?","What are the underying purposes and ideologies underlying CS4All?","There are a lot of students in NYC schools","Schools are (largely) autonomous","What aspects of CS education do admin & teachers buy in?","What structural barriers do teachers encounter in their implementation efforts?","African American students have higher interest in CS than engineering in general","What are the failure modes? How bad are they?","There are tensions between implementation and evaluation ambitions","Managing so many partnerships","Potential collaborators","Good communication among players will need to be supported continually","Keeping on top of all the moving pieces","Use\/knowledge of non-US programs","A lot is unknown about what works","CS in NYC measured outcomes","The research component is very preliminary","Integration of CS on STARS (NYC DOE course system)","Non-CS licensed teachers\/trained teachers teaching CS","Functional tech infrastructure","How are best practices bubbling from those who succeed to those who need it?","Infusion into existing courses is a critical piece to the puzzle","Circulation of CS Pedagogy Knowledge across the city","School admin support is necessary","Scale of CS4All makes it challenging","Fidelity of implementation","NYC is the 13th largest state, how can we expect consistency?","How will\/can we track fidelity of implementation at scale?","Defining CS and knowing what the taught CS 'unit' includes","Return on Investment","How to measure\/evaluate\/understand CS Ed at scale","What impacts do policy (state, federal) initiatives have?","NYC as a model","Bring Stakeholders together (Public, private, DOE, research)","Opportunity","All Learners","To what extent do teachers feel supported and prepared to teach CS and how does this correlate with PD access?","What do we think of CS education?","In what areas related to CS do teachers need support?","What are teachers met and unmet needs? (over time, by their student population)","How are student contact hour distributed among students with different characteristics (race, SES, gender, abilities)?","How do schools decide what exposure students get and how it differes for students at the school?","Implementation and Sustainability","Curriculum, Bluepring, but local implementation","How to get beynd the first group of teacher adopters?","Differentiatied teacher professional development","Parent\/Student interest\/Conception optics","What is the plan for dealing with pushback when results show something not working?","Tracking the pace of implementation and sustainability","Building bridge while walking across it (aka flying a plane while constructing)","School Autonomy","Integrating computing in other subjects","Fidelity  ","Implementation (the \"how)","Multiple career paths","Grad Requirements","NYC is highly fluid (as well as diverse)","Building Infrastructure","Kids are transient so no graduation requirement","Implementation decisions are made at local school level. Schools have options.","Schools often implement CS programs in diverse ways (e.g., separate courses, mulidisciplinary units)","Heterogeneous spread and scale - how to evaluate?","Learning ecology - multiple institutions","That other states and cities are looking to NYC for CS models","Influence Mapping","Its about desigining an ecosystem as well as curriculum","Thinking about schools and system in addition to teachers and students","Understanding how goals translate into teacher and student experiences","What I didn't hear: CS learning ecology - schools have after school","Accounting\/Remembering the context of NYC schools and society (diversity, inequality, gentrification, segregation)"],"Research & Evaluation":["Research & Evaluation Priorities of DOE\/CSNYC","CSNYC is looking at $40M of outside funding","How will this help youth outcomes, especially those from nondominant communities?","70% problem is about implementation","Numbers! How many youth, how many schools, gives good perspective to the scope of the problem before us","Outcome Measures: 40%","Depth (learning) vs. Breadth (exposure)","Importance of \"exposure\" vs. major choice and career path as goals","Methodological codification","4 types of outcomes","Prioritizing and defining areas to focus Research & Evaluation efforts (Forbes 2x2 grid)","Good Measures (Student, teacher, org, system)","Multi-method approaches to measuring student learning at scale","Artifact Analysis","Artifact Based Assessment","Survey, Validated Measures","Being able to get at the level of detail needed to understand outcomes","Using Research & Evaluation to refine, adjust the initiative","We need more Data","Process is moving forward. What do we need to know now in order to avoid failure?","How do we ensure what we're measuring is relevant and useful for schools? Not measurement for measurement sake","Collect common data indicators across CS programs","Need to assess what the districts, teachers, and students gain","How many students are taking CS in NYC now?","Student outcomes","Data Availability","Data Volume","IDing where knowledge gaps exist in current research approaches","Evaluation\/Fidelity","Are CS teachers retained as teachers at the same rates of other K-12 or STEM teachers?","How are teachers framed, discussed, and described in the discourse of NYC's CS for all initiative","How do teachers integration of CS change over mulitple years and how does PD relate to those changes?","What are teachers beliefs for CS education?","How do teachesr see CS in their school?","What do young learners define as \"computer science\"?","Evaluation vs. Research","Ideas for collaboration around research infrastructure","Research & Evaluation","Research & Evaluation to inform design of initiative","CSNYC Program Overview","Where does CSTA fit in community of practice and other activities?","Does teacher PD training translate to measureable student outcomes?","How does teacher teaching methods affect students learning of CS?","What processes, structures, and resources are needed to help students extend their \"unit experiences\" to other experiences and interests?","What are the indicators of a \"meaningful high quality\" CS learning experience?","How do we measure (short of high-stakes common exam) the efficacy of the infusive CS-in-X class model if every teacher can do anything?","Standardizing metrics of success (for teachers and students)","Is student reasoning of CS influenced by teacher gender?","What are the set of proximal and distal student outcomes?","Research","Need for CS artifact based assessment","More research needed in K-12 CS education","CSNYC looking for research partners","How can NYC make sure new CS learning and opportunities are available long-term to under-served students?","CS in NY testing taking away from other priorities","Artifact based assessment","Data, data, data to evaluate CS10K efforts","Lots of student and teacher data to draw conclusions about CS Ed","Big need for feasible assesments","DOE uses STARS system to measure number of hours of CS taught\/# of teachers","Impact on all students","Will it make a difference?","Importance of defining 'meaningful experience' in CS and outcomes","Seamlessly weaving together research and practice in CS4All","How might CS4All research and practice be woven together to produce timely insights that support the initiative and deep insigths that can inform other roll outs?","How might we circulate, elevate, and build on teacher CS pedagogy expertise?","Developing measures of student learning outcomes","Assessing equity in learning opportunities across and within schools","Lack of attention to school context and leadership as an affordance or constraint for implementation of CS4All","Evalution - Gride with students, teachers community by participation and outcomes","Evaluation and Measurement","Share surveys","Need to better understand what data to collect","Measurement"],"Sustainability & Scale":["Finding ways of sustaining the work in the midst of turnover\/change in admin and among partners","What are the incentives for those in power (principals) in terms of carrots and sticks, to assure compliance","Institutional Change (and the role of networks in that change)","Remebering educator agency in the context of an initiative that is mandated and accountable","Developmental Evaluation","Focus on metrics of institutional change","Sustainability","How do we sustain the innovation","What!?!?!? Art Teachers are going to teach CS [Public Relations]","Sustainability of Improvement","Evolving\/Changing Strategy","Coherence\/Sonsistency\/Common across programs","Clarity of plan and strategy","Large Scale Change","Change Agents","Academic and social integration of students and teachers in CS","What is the theory of change underlying this initiative?","Theory of change is still developing, what frameworks exist to help us understand?","Fluency or Jobs","School-level autonomy","School-level ownership of CS education to promote sustainability","Principal buy in is a factor for school reform implementation","Providing differentiating supports to meet local school's needs by understanding where strengths of a school are and whare resources are needed.","Iterative and collaborative Research & Evaluation partnerships with CS4All, especially in early years","Providing sufficient infrastructure and support for initiative","researching and supporting sustainability","You need to build a machine for sustainability, not just get it to all by 2026","How can we assure that CS for All sustained after 2026?","What happens if you have trouble raising the money?","Outcomes go beyond the numbers of participants to changed practices","Long term goal goes beyond just exposure to building deeper CS engagement","Buy-in will be very important at all levels","Scaling up will require true institutional change","Buy in and institutional change","It will be critical to maintain focus and structure balanced with flexibility for adjustments","CS in NYC sustaining motivation without graduation requirement, certification, or state test","DOE Support","Clarification on questions about sustainability","Scaling  ","Need for cross city coordination of CS initiatives and evaluations","NYC interested in understanding institutional change","Scaling","How do you create sustainable CS opportuniteis for low-income under-represented students?","Buy in ","Communicating with incentivizing school is a challenging","Administrative buy-in\/support","Teacher involvement in decisions","Local control is a rate-determining step","Sustainability","Buy-in?","Fidelity","Sustaining Initiatives in NYC DOE","Systemic Change","Scale-up and sustainability","Importance of measuring capacity building","Some for of standardization","Resources","Time","Building all parts to enable CSEd","Scalability"],"Teacher Development":["Preservice","Preservice Teacher Prep","Certification for HS Teachers","Credentialling","First look at teacher participation and outcome data; then students","Measuring outcomes and participation across multiple programs and environments","Development and implementation of data collection tools","We need to separate\/glamify CS content vs. pedagogy (i.e. TPACK) as an entry point for teacher training","All teachers can learn CS; just as all students can learn CS","Need more teachers","Teacher Preparation","Teacher pathways matter","Is certification required?","Build lively small communities","Pre\/In service PD models","Teacher PD","What evidence of teacher understanding","SEP Cohorts are important","Find motivated inservice teachers","Teacher Preparation","Teacher Retention","Conversation about university teacher ed program and certification process.","Professional development and preservice CS education","Developing a strong and dynamic community of practice that is positioned\/empowered to make CS4All forward long term","District - Building level support for teachers","Projects interest in fidelity","Where is teacher expertise and educator-led innovation in CS4All","Which PD methods\/practices are most effective for helping teachers to integrate CS into their subject areas?","How do we measure success of the \"share best practices\" model of feedback into the PD system","What are the school structures and support that facilitate teachers implementation of CS4All","Teacher feelings and needs","What differences are emerging in the learning of CS from various exceptionalities?","What are the diverse pathways of support that teachers trace in their learning?","Do kids think they have learned CS? How does this vary by content taught\/tools used?","Are contact hours with CS correlated with other changes such as test scores school attended, attitudes toward CS?","Ensure that PD of teachers includes social issues not just \"cognitive gains\" (eg, interest, identity, belonging)","How to connect to what teachers already teach","Its not just Math and Science teachers teaching CS","New entry\/exit points for teachers as CS Ed grows","Teacher PCK knowledge","PCK for belongingness","Teacher preparation","Teacher's Knowledge in CS","Teachers won't participate if they feel unsupported","Do teachers want this","Teachers from different contents can learn and teach CS","We can't treat teachers as blank slates","4,775 teachers 100 hours of training","Massive scale of teacher PD","Teacher prep - quality","That social studies teachers are the largest proportion of those who teach CS","What does effective CS teaching look like","Where are the teachers to fill the pipeline","Classroom Instruction - PD, PSL, admin, parents","What to cover and what grade bands with teachers\/schools with varying backgrounds, interests and resources","Lack of clarity about elementary school CS education","What do teachers need to know to teach CS (aka CS PCK)","Resource kits for K-12 (blueprint)","Assumption is that teachers have no prior CS background","Teacher pipeline bootstrapping quality ","Teachers have multiple entry points into CS education","Teacher PD preparation","CS in NYC teacher training","Preservice Ed challenges","Preservice Education ","Importance of professional development","Importance of evaluating different models for CS professional development for teachers","Inservice PD"]};

function showRelated(point) {
  var $related = $('.items');
  $related.empty();

  $.each(categoryData[point.csnyc_category], function(i, item) {
    var li = $('<li/>').text(item).appendTo($related);
  });

  $('.sidebar .related .category').text(point.csnyc_category);
}
