import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const form = useRef();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("gmail", "template_YeJhZkgb", form.current, "your-token")
			.then(
				() => {
					alert("Message successfully sent!");
					window.location.reload(false);
				},
				() => {
					alert("Failed to send the message, please try again");
				}
			);
	};

	return (
		<>
			<div className="container contact-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={[
								"C",
								"o",
								"n",
								"t",
								"a",
								"c",
								"t",
								" ",
								"m",
								"e",
							]}
							idx={15}
						/>
					</h1>
					<p>
						I am interested in freelance opportunities - especially
						on ambitious or large projects. However, if you have any
						other requests or questions, don't hesitate to contact
						me using below form either.
					</p>
					<div className="contact-form">
						<form ref={form} onSubmit={sendEmail}>
							<ul>
								<li className="half">
									<input
										placeholder="Name"
										type="text"
										name="name"
										required
									/>
								</li>
								<li className="half">
									<input
										placeholder="Email"
										type="email"
										name="email"
										required
									/>
								</li>
								<li>
									<input
										placeholder="Subject"
										type="text"
										name="subject"
										required
									/>
								</li>
								<li>
									<textarea
										placeholder="Message"
										name="message"
										required
									></textarea>
								</li>
								<li>
									<input
										type="submit"
										className="flat-button"
										value="SEND"
									/>
								</li>
							</ul>
						</form>
					</div>
				</div>
			</div>
			<div className="info-map">
				Shantanu K,
				<br />
				Beacon Ave.,
				<br />
				Jersey City, NJ <br />
				USA <br />
				<br />
				<span>shantanu.kx@gmail.com</span>
			</div>
			<div className="map-wrap">
				<MapContainer
					center={[40.738779000909275, -74.05699421349198]}
					zoom={13}
				>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Marker position={[40.738779000909275, -74.05699421349198]}>
						<Popup>
							Shantanu lives here, come over for a cup of coffee
						</Popup>
					</Marker>
				</MapContainer>
			</div>
			<Loader type="pacman" />
		</>
	);
};

export default Contact;
