import React from "react";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Narasimhadevara K Chaitanya",
      photo: images.Me, // Replace with actual image URL
      education: "Bachelors in CSE",
      occupation: "Developer",
    },
    {
      name: "Vaishnavi Mokkapati",
      photo: "https://via.placeholder.com/150", // Replace with actual image URL
      education: "Bachelors in Bio Technology",
      occupation: "Author & Researcher",
    },
    {
      name: "Sri Datta R",
      photo: "https://via.placeholder.com/150", // Replace with actual image URL
      education: "Bachelors in CSE",
      occupation: "Cultural Historian & Lecturer",
    },
  ];

  return (
    <MainLayout>
    <div className="container mx-auto px-5 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        About Us
      </h1>

      {/* Introduction Text */}
      <p className="text-center text-dark-light text-lg mb-10">
        We are dedicated to spreading the eternal wisdom of Sanatan Dharma by
        sharing knowledge, promoting cultural heritage, and inspiring a
        spiritual way of life.
      </p>

      {/* Mission & Vision */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-light p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-dark-light">
              Our mission is to provide a space where people can explore, learn,
              and practice the timeless wisdom of Sanatan Dharma. We aim to
              create an inclusive community where spiritual growth and cultural
              preservation are at the forefront of everything we do.
            </p>
          </div>
          <div className="bg-light p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h2>
            <p className="text-dark-light">
              Our vision is a world where the principles of Dharma are
              recognized as universal truths that guide individuals toward
              peace, happiness, and spiritual awakening. We strive to be a
              beacon of knowledge and spiritual guidance for people of all
              backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg shadow-lg p-5 bg-white text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-dark-soft">
              {member.name}
            </h2>
            <p className="text-sm text-dark-light mt-2">
              <strong>Education:</strong> {member.education}
            </p>
            <p className="text-sm text-dark-light mt-1">
              <strong>Occupation:</strong> {member.occupation}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Join Us on Our Journey
        </h2>
        <p className="text-lg text-dark-light mb-6">
          If you are inspired by our work and would like to join us on this
          spiritual journey, we invite you to get in touch with us, attend our
          events, or support our cause.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary transition duration-300">
          Get Involved
        </button>
      </section>
    </div>
    </MainLayout>
  );
};


export default AboutPage;
