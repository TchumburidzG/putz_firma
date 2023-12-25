import "./impresum.css"
import { useEffect } from "react";
function Impresum() {
  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  })
  return (
    <div className="impresum-container">
      <h3>Impresum</h3>
      <div className="address-impresum"></div>
      <div className="texts-impresum">
        <strong>Haftungsausschluss</strong>
        <strong>1. Inhalt des Onlineangebotes</strong>
        <p>
          Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit,
          Vollständigkeit oder Qualität der bereitgestellten Informationen.
          Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller
          oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der
          dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und
          unvollständiger Informationen verursacht wurden, sind grundsätzlich
          ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches
          oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend
          und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten
          oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,
          zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>

        <strong>2. Verweise und Links</strong>
        <p>Bei direkten oder indirekten Verweisen auf fremde Webseiten
          („Hyperlinks“), die außerhalb des Verantwortungsbereiches des
          Autors liegen, würde eine Haftungsverpflichtung ausschließlich
          in dem Fall in Kraft treten, in dem der Autor von den Inhalten
          Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die
          Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor
          erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung
          keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren.
          Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die
          Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei
          Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen
          Inhalten aller verlinkten /verknüpften Seiten, die nach der Linksetzung
          verändert wurden. Diese Feststellung gilt für alle innerhalb des
          eigenen Internetangebotes gesetzten Links und Verweise sowie für
          Fremdeinträge in vom Autor eingerichteten Gästebüchern,
          Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen
          anderen Formen von Datenbanken, auf deren Inhalt externe
          Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder
          unvollständige Inhalte und insbesondere für Schäden, die aus der
          Nutzung oder Nichtnutzung solcherart dargebotener Informationen
          entstehen, haftet allein der Anbieter der Seite, auf welche
          verwiesen wurde, nicht derjenige, der über Links auf die
          jeweilige Veröffentlichung lediglich verweist.
        </p>

        <strong>3. Urheber- und Kennzeichenrecht</strong>
        <p>Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
          verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte
          zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente,
          Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken,
          Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb
          des Internetangebotes genannten und ggf. durch Dritte geschützten
          Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen
          des jeweils gültigen Kennzeichenrechts und den Besitzrechten der
          jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung
          ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte
          Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor
          selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine
          Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente,
          Videosequenzen und Texte in anderen elektronischen oder gedruckten
          Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht
          gestattet.
        </p>

        <strong>4. Datenschutz</strong>
        <p>Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe
          persönlicher oder geschäftlicher Daten (Emailadressen, Namen,
          Anschriften) besteht, so erfolgt die Preisgabe dieser Daten
          seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die
          Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit
          technisch möglich und zumutbar – auch ohne Angabe solcher Daten bzw.
          unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
          Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben
          veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und
          Faxnummern sowie Emailadressen durch Dritte zur Übersendung von
          nicht ausdrücklich angeforderten Informationen ist nicht gestattet.
          Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails
          bei Verstössen gegen dieses Verbot sind ausdrücklich vorbehalten.
        </p>
        <strong>5. Rechtswirksamkeit dieses Haftungsausschlusses</strong>
        <p>Dieser Haftungsausschluss ist als Teil des Internetangebotes
          zu betrachten, von dem aus auf diese Seite verwiesen wurde.
          Sofern Teile oder einzelne Formulierungen dieses Textes der
          geltenden Rechtslage nicht, nicht mehr oder nicht vollständig
          entsprechen sollten, bleiben die übrigen Teile des Dokumentes
          in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
        </p>
        <strong>6. Google Analytics</strong>
        <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der
          Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“,
          Textdateien, die auf Ihrem Computer gespeichert werden und die eine
          Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
          den Cookie erzeugten Informationen über Ihre Benutzung dieser Website
          werden in der Regel an einen Server von Google in den USA übertragen
          und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung
          auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb
          von Mitgliedstaaten der Europäischen Union oder in anderen
          Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
          zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen
          Server von Google in den USA übertragen und dort gekürzt. Im Auftrag
          des Betreibers dieser Website wird Google diese Informationen benutzen,
          um Ihre Nutzung der Website auszuwerten, um Reports über die
          Websiteaktivitäten zusammenzustellen und um weitere mit der
          Websitenutzung und der Internetnutzung verbundene Dienstleistungen
          gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
          Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht
          mit anderen Daten von Google zusammengeführt. Sie können die
          Speicherung der Cookies durch eine entsprechende Einstellung
          Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf
          hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
          Funktionen dieser Website vollumfänglich werden nutzen können.
          Sie können darüber hinaus die Erfassung der durch das Cookie
          erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl.
          Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
          durch Google verhindern, indem sie das unter dem folgenden Link
          verfügbare Browser-Plugin herunterladen und installieren:<br></br>
          [http://tools.google.com/dlpage/gaoptout?hl=de].“</p>

        <strong>7. Irrtum</strong>
        <p>Änderungen und Irrtümer sind vorbehalten / Angaben ohne Gewähr.</p>

      </div>
    </div>
  )
};

export default Impresum;
