import React from 'react';
// import "Profile.module.css"
import AccordionBtn from '../../components/AccordionBtn';
import AccordionItem from '../../components/AccordionBtn/AccordionItem';

const Profile = () => {
  return (
    <>
      <div class="container">
        <div id="content" class="content p-0">
          <div class="profile-header">
            <div class="profile-header-cover"></div>

            <div class="profile-header-content">
              <div class="row">
                <div class="col-m">
                  <div class="profile-header-img">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                      alt=""
                      width="200px"
                    />
                  </div>

                  <div class="profile-header-info">
                    <h4 class="m-t-sm">Christina Sick</h4>
                    <p class="m-b-sm">
                      <b>Aktuelle Stellenbezeichnung:</b> Personalentwicklerin
                    </p>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="col-md-4 hidden-xs hidden-sm">
                    <ul class="profile-info-list">
                      <li>
                        <div class="field">
                          <b>Kontakt (E-Mail):</b>
                        </div>
                        <div class="value">sick@hs-albsig.de</div>
                      </li>
                      <li>
                        <div class="field">
                          <b>Statusgruppe:</b>
                        </div>
                        <div class="value">Mitarbeiter VW</div>
                      </li>
                      <li>
                        <div class="field">
                          <b>Bildungsabschluss:</b>
                        </div>
                        <div class="value">Promotion</div>
                      </li>
                      <li>
                        <div class="field">
                          <b>Eintrittsdatum:</b>
                        </div>
                        <div class="value">01.12.2017</div>
                      </li>
                      <li>
                        <div class="field">
                          <b>Austrittsdatum:</b>
                        </div>
                        <div class="value">30.06.2021</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <ul class="profile-header-tab nav nav-tabs">
                    <li class="nav-item"><a href="#profile-post" class="nav-link" data-toggle="tab">POSTS</a></li>
                    <li class="nav-item"><a href="#profile-about" class="nav-link active show" data-toggle="tab">ABOUT</a></li>
                    <li class="nav-item"><a href="#profile-photos" class="nav-link" data-toggle="tab">PHOTOS</a></li>
                    <li class="nav-item"><a href="#profile-videos" class="nav-link" data-toggle="tab">VIDEOS</a></li>
                    <li class="nav-item"><a href="#profile-friends" class="nav-link" data-toggle="tab">FRIENDS</a></li>
                </ul> */}
          </div>

          <div class="profile-container">
            <div class="row row-space-20">
              <div class="col-md-8">
                <div class="tab-content p-0">
                  <div class="tab-pane active show" id="profile-about">
                    <table class="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="1">Name Fort-/Weiterbildung</th>
                          <th colspan="1">Methodenkompetenz</th>
                          <th colspan="1">Sozialkompetenz</th>
                          <th colspan="1">Fachkompetenz</th>
                          <th colspan="1">Selbstkompetenz</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="field">
                            <AccordionBtn
                              text={'Agiles Arbeiten'}
                              subtext={[
                                'Dauer: 8 UE',
                                'Datum Beginn: 27.05.2021',
                                'intern/extern: intern',
                                'Anbieter: HSAS',
                                'Trainer: Andrea Mross',
                                'Zertifizierung: nein',
                              ]}
                            />
                          </td>
                          <td class="value">Projektmanagement</td>
                          <td>Teamarbeit</td>
                          <td>nein</td>
                          <td>nein</td>
                        </tr>
                        <tr>
                          <td class="field">
                            <AccordionBtn
                              text={'Professional Scrum Master'}
                              subtext={[
                                'Dauer: 16 UE',
                                'Datum Beginn: -',
                                'intern/extern: extern',
                                'Anbieter: VDI / scrum.org',
                                'Trainer: Ralph Jocham',
                                'Zertifizierung: ja',
                              ]}
                            />
                          </td>
                          <td class="value">Projektmanagement</td>
                          <td>nein</td>
                          <td>nein</td>
                          <td>nein</td>
                        </tr>
                        <tr>
                          <td class="field">
                            <AccordionBtn
                              text={'Storytelling für Innovation und Change'}
                              subtext={[
                                'Dauer: 8 UE',
                                'Datum Beginn: -',
                                'intern/extern: intern',
                                'Anbieter: -',
                                'Trainer: Prof. Dr. Michael Müller',
                                'Zertifizierung: nein',
                              ]}
                            />
                          </td>
                          <td class="value">Projektmanagement</td>
                          <td>Kommunikation</td>
                          <td>Öffentlichkeitsarbeit</td>
                          <td>nein</td>
                        </tr>
                        <tr>
                          <td class="field">
                            <AccordionBtn
                              text={'Agiles Projektmanagement mit Scrum'}
                              subtext={[
                                'Dauer: 8 UE',
                                'Datum Beginn: 25.02.2021',
                                'intern/extern: extern',
                                'Anbieter: VWA',
                                'Trainer: David Tan',
                                'Zertifizierung: nein',
                              ]}
                            />
                          </td>
                          <td class="value">Projektmanagement</td>
                          <td>nein</td>
                          <td>nein</td>
                          <td>nein</td>
                        </tr>
                        <tr>
                          <td class="field">
                            <AccordionBtn
                              text={'Personal- und Organisationentwicklung'}
                              subtext={[
                                'Dauer: 180 UE',
                                'Datum Beginn: 15.04.2020',
                                'intern/extern: extern',
                                'Anbieter: Universität Ulm',
                                'Trainer: Prof. Dr. Klaus Melchers',
                                'Zertifizierung: ja',
                              ]}
                            />
                          </td>
                          <td class="value">nein</td>
                          <td>nein</td>
                          <td>Personal und Organisation</td>
                          <td>nein</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <table class="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">
                            Kompetenzbereich Methodenkompetenz
                          </th>
                        </tr>
                      </thead>*/}
                    {/* <tbody>
                                        <tr>
                                            <td class="field">Mobile Phones</td>
                                            <td class="value">
                                                +44 7700 900860
                                               
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="field">Email</td>
                                            <td class="value">
                                                admin@infinite.com
                                             
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="field">Facebook</td>
                                            <td class="value">
                                                http://facebook.com/infinite.admin
                                               
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="field">Website</td>
                                            <td class="value">
                                                http://seantheme.com
                                               
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="field">Address</td>
                                            <td class="value">
                                                Twitter, Inc.<br />
                                                1355 Market Street, Suite 900<br />
                                                San Francisco, CA 94103
                                            </td>
                                        </tr>
                                    </tbody> */}
                    {/*</table>
                    <table class="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">Kompetenzbereich Sozialkompetenz</th>
                        </tr>
                    </thead>*/}
                    {/* <tbody>
                                        <tr>
                                            <td class="field">Birth of Date</td>
                                            <td class="value">
                                                November 4, 1989
                                               
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="field">Gender</td>
                                            <td class="value">
                                                Male
                                             
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="field">Facebook</td>
                                            <td class="value">
                                                http://facebook.com/infinite.admin
                                               
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="field">Website</td>
                                            <td class="value">
                                                http://seantheme.com
                                                
                                            </td>
                                        </tr>
                                    </tbody> */}
                    {/*</table>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
