import React, { Component } from 'react';
import './Guides.css';
import Assamite from '../Images/ClanGuides/OnyxPathAssamite.png'
import Brujah from '../Images/ClanGuides/OnyxPathBrujah.png'
import DaughtersofCacophany from '../Images/ClanGuides/OnyxPathDaughtersofCacophany.png'
import Gangrel from '../Images/ClanGuides/OnyxPathGangrel.png'
import Gargoyle from '../Images/ClanGuides/OnyxPathGargoyle.png'
import Giovanni from '../Images/ClanGuides/OnyxPathGiovanni.png'
import Lasombra from '../Images/ClanGuides/OnyxPathLasombra.png'
import Nosferatu from '../Images/ClanGuides/OnyxPathNosferatu.png'
import Setites from '../Images/ClanGuides/OnyxPathSetites.png'
import Toreador from '../Images/ClanGuides/OnyxPathToreador.png'
import Tremere from '../Images/ClanGuides/OnyxPathTremere.png'
import Ventrue from '../Images/ClanGuides/OnyxPathVentrue.png'
import Camarilla from '../Images/SectGuides/OnyxPathCamarilla.png'
import Anarchs from '../Images/SectGuides/OnyxPathAnarchs.png'
import Independent from '../Images/SectGuides/OnyxPathIndependent.png'
import Sabbat from '../Images/SectGuides/OnyxPathSabbat.png'

class Guides extends Component {
  render() {
    return (
      <div className="segment">
        <div className="guide-container">
          <div className="guide">
            <a href="https://docs.google.com/document/d/12gK68aGi3vN0phXNsvA1SONMRqy8PHFILLTV3W12P-Y/edit?usp=sharing" target="_blank">
              <img src={Assamite}/>
            </a>
            <div className="caption">Assamite</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1_hBrbvUu9Gyjyuz2pk5q8vQmncg-XUzb1XCzpPU24_Q/edit?usp=sharing" target="_blank">
              <img src={Brujah}/>
            </a>
            <div className="caption">Brujah</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1yTFDRrMzACksHRiDBMd3cFttEpg-RGJrr2NXDaWWSGg/edit?usp=sharing" target="_blank">
              <img src={DaughtersofCacophany}/>
            </a>
            <div className="caption">Daughters of Cacophany</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1RkzYVA_3AtXTjVl00pw2SBBf_YMISbEAxvMIm_gKQZI/edit?usp=sharing" target="_blank">
              <img src={Setites}/>
            </a>
            <div className="caption">Followers Of Set</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/15j-5Z0YhVLDbmK3bslpiJHTgPMqaqxBkVYFmbsRkNJA/edit?usp=sharing" target="_blank">
              <img src={Gangrel}/>
            </a>
            <div className="caption">Gangrel</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1T9kRAaSTv_Zc0NXF6WQTrNdts6VgBBJnO7L8SVMjOKw/edit?usp=sharing" target="_blank">
              <img src={Gargoyle}/>
            </a>
            <div className="caption">Gargoyle</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/19NFnH8_07k72KZFK_gewS5UIPO2QrzRv53laS5jF-go/edit?usp=sharing" target="_blank">
              <img src={Giovanni}/>
            </a>
            <div className="caption">Giovanni</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1FHKnb9IiCOwR1wsDMHdeRPJnJQLGrPRRtCq5r3TrwIM/edit?usp=sharing" target="_blank">
              <img src={Lasombra}/>
            </a>
            <div className="caption">Lasombra</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1DcFkGWn_UiqQJVztd_F7eJp-wAAI3aQe_EV54pYD-o8/edit?usp=sharing" target="_blank">
              <img src={Nosferatu}/>
            </a>
            <div className="caption">Nosferatu</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1w5ZYErMtX04KCZ9KDifCQMdLjNpgCYLaASbvnEWetcs/edit?usp=sharing" target="_blank">
              <img src={Toreador}/>
            </a>
            <div className="caption">Toreador</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1bZZjrX5WqnlWnQA3uPeLDDokiqlsOmGtvtkaG3gbGuI/edit?usp=sharing" target="_blank">
              <img src={Tremere}/>
            </a>
            <div className="caption">Tremere</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1RuQ1K2GPb7rr-OzRDSAo5rEI8rDHkE9-hOnIsDXBuig/edit?usp=sharing" target="_blank">
              <img src={Ventrue}/>
            </a>
            <div className="caption">Ventrue</div>
          </div>
        </div>
        <div className="guide-container">
          <div className="guide">
            <a href="https://docs.google.com/document/d/1heb5sVBVfsSI967EgbVMhTi4H_GBnLbn47P_iWk9Jus/edit?usp=sharing" target="_blank">
              <img src={Camarilla}/>
            </a>
            <div className="caption">The Camarilla</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1aC4Wt9_22q00Gz_EmqqTN3YPlNNHgKJTYQ3r-G6JrvA/edit?usp=sharing" target="_blank">
              <img src={Anarchs}/>
            </a>
            <div className="caption">Anarch Movement</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1NTlr4LI-Z-Ln_MB-kFIOWiWAdxAYkrnkXtfqqpwFOpQ/edit?usp=sharing" target="_blank">
              <img src={Independent}/>
            </a>
            <div className="caption">Independent Alliance</div>
          </div>
          <div className="guide">
            <a href="https://docs.google.com/document/d/1FwO8Qaaqvf42EAwGJSqLmw5JnaG5nyffaFVPQMBa_Lc/edit?usp=sharing" target="_blank">
              <img src={Sabbat}/>
            </a>
            <div className="caption">The Sabbat</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Guides;
