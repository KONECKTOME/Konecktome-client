import React, { Component } from "react";
import Navbar from "../LandingPage/Navbar";
import BreadCrumbs from "../../Reusable/Breadcrumbs/BreadCrumbs";
import Footer from "../LandingPage/Footer";
import styles from "../../../css/UpdateLandingPage/Navbar.module.css";
import "../../../css/Docs/Terms.css";

class Terms extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className={`${styles.navContainer}`}>
          <BreadCrumbs
            // parentPages={breadCrumbData}
            currentPage="Terms & Conditions"
          />
        </div>
        <div id="terms-header">
          <p className="desktop-header">Terms & Conditions</p>
        </div>
        <div id="terms">
          <p>
            Please read through the Terms. If you do not agree with the Terms,
            do not use this web site. If you do use the web site, your conduct
            indicates that you agree to be bound by the Terms.
          </p>
          <div>
            <p className="desktop-header">Copyright notice</p>
            <p>
              Unless otherwise specified the copyright in the contents of all
              the pages in this web site are owned by Konecktome.com.
            </p>
          </div>
          <div>
            <p className="desktop-header">
              Conditions of your use of this web site
            </p>
            <p>
              Except as stated below, the contents of this web site may not be
              copied, reproduced, distributed, republished, downloaded,
              displayed, posted or transmitted in any form or by any means
              without the prior express written permission.
            </p>
            <p>
              You may not distribute, display or copy any of the contents of the
              pages contained in this web site to third parties including, but
              not limited to "caching" any material on this web site for access
              by third parties and " mirroring" any material on this web site.
            </p>
            <p>
              The use of any and all automated scripts, spiders or other
              software to perform automated searches within this website is
              strictly prohibited. Any attempt made to extract and/or download
              significant amounts of Information from this website, or to
              compile a database from information obtained from this website is
              strictly forbidden.
            </p>
            <p>
              You may print or download to disk the contents of an individual
              page of this web site for the purpose of private and personal
              non-commercial use.
            </p>
            <p>
              You may also permit your computer to make an electronically
              stored, transient copy of the content in this web site for the
              purpose of viewing it while connected to the internet only.
            </p>
            <p>However, you may only make one copy of any content.</p>
          </div>
          <div>
            <p className="desktop-header">
              Exclusion of Konecktome.com's liability
            </p>
            <p>
              The information contained in the material in this web site is only
              for information purposes. We make no warranties or representations
              as to its accuracy or reliability. The material on this web site
              does not constitute advice and you should not rely on any material
              in this web site to make (or refrain from making) any decision or
              take (or refrain from taking) any action.
            </p>
            <p>
              We don't make any warranty or representation as to the accuracy or
              fitness for purpose of any material on this web site or the
              reliability of the access to this web site.
            </p>
            <p>
              In no event do we accept liability of any description, including
              liability for negligence (except for personal injury or death),
              for any damages or losses (including, without limitation, loss of
              business, revenue, profits, or consequential loss) whatsoever
              resulting from performance of, use of or inability to use this web
              site.
            </p>
            <p>
              While Konecktome.com endeavours to ensure that this web site is
              normally available 24 hours a day, Konecktome.com shall not be
              liable if for any reason this web site is unavailable at any time
              or for any period. Access to this web site may be suspended
              temporarily and without notice in the case of system failure,
              maintenance or repair or for reasons beyond our control.
            </p>
            <p>
              We make no warranty that this web site (or web sites which are
              linked to this web site) is free from computer viruses or any
              other malicious or impairing computer program.
            </p>
            <p>
              The pages contained in this web site may contain technical
              inaccuracies and typographical errors.
            </p>
            <p>
              The information in these pages may be updated from time to time
              and may at times be out of date.
            </p>
            <p>
              We accept no responsibility for keeping the information in these
              pages up to date or liability for any failure to do so.
            </p>
            <p>
              All users are advised to check advert details carefully before
              entering into any agreements of any kind. If in doubt, please seek
              legal advice.
            </p>
          </div>
          <div>
            <p className="desktop-header">Third party material</p>
            <p>
              This web site contains material by third parties. All third party
              material is published in good faith. We do not accept any
              responsibility for the accuracy of such material (nor is any
              warranty expressed or implied by publication) and Konecktome.com
              specifically disclaims and excludes all liability to any person
              for any loss or damage of any nature whatsoever or however arising
              from any error, omission or inaccuracy in such material and
              Konecktome.com takes no responsibility for such material.
            </p>
            <p>
              In the event that you purchase or obtain any goods or services
              from a third party then your acquisition of such goods or services
              will be in accordance with the third party's terms and conditions
              and we will have no liability to you in respect of the same.
            </p>
            <p>
              This web site also contains links to other web sites which are not
              under the control of and are not maintained by Konecktome.com. We
              are not responsible for the content of those sites. Konecktome.com
              provides these links for your convenience only but does not
              necessarily endorse the material on these sites.
            </p>
            <p>
              All product names mentioned herein are the trademarks of their
              respective owners. Some documents may contain other proprietary
              notices and copyright information relating to that document or
              organisation. You agree that Konecktome.com has not conferred by
              implication, or otherwise, any licence or right under any patent,
              trademark or copyright of Konecktome.com or of any third party.
            </p>
          </div>
          <div>
            <p className="desktop-header">Validity</p>
            <p>
              If any term, condition, or provision of these terms and conditions
              is determined to be unlawful, invalid, void, or for any reason
              unenforceable, the validity and enforceability of the remaining
              terms, conditions and provisions shall not in any way be affected
              or impaired thereby.
            </p>
          </div>
          <div>
            <p className="desktop-header">Law governing the Terms</p>
            <p>
              Use of this Website and these Terms shall be subject only to the
              laws of England and Wales which shall exclusively govern the
              interpretation, application and effect of all the above
              permissions, exclusions, licences and conditions of use.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Terms;
