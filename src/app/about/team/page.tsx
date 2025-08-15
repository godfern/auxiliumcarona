import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function TeamPage() {
  const managementTeam = [
    {
      name: "Sr. Lavita Sequira",
      role: "Principal",
      department: "School Principal",
      photo: "/images/sr_lavita.jpg",
      email: "principal@auxiliumcarona.edu.in",
      phone: "+91 98765 43210",
      description: "Leading our school with over 15 years of experience in educational leadership and administration.",
      qualifications: "M.Ed, B.Ed, MA in Education Management"
    },
    {
      name: "Sr. Antonette Desouza",
      role: "School Manager",
      department: "School Administration",
      photo: "/images/sr_antonette.png",
      email: "manager@auxiliumcarona.edu.in",
      phone: "+91 98765 43211",
      description: "Overseeing school operations and ensuring smooth administrative functioning.",
      qualifications: "MBA in Education Management, B.Ed"
    },
    {
      name: "Sr. Provincial",
      role: "Provincial Education Director",
      department: "Provincial Administration",
      photo: "/images/sr_provincial.png",
      email: "provincial@auxiliumcarona.edu.in",
      phone: "+91 98765 43212",
      description: "Providing strategic direction and oversight for educational excellence across the province.",
      qualifications: "PhD in Education, MA in Educational Leadership"
    }
  ];

  const teachingStaff = [
    {
      name: "Mrs. Maria Fernandes",
      role: "Head of Department - Science",
      department: "Science Department",
      photo: "/images/teacher-1.jpg",
      email: "science@auxiliumcarona.edu.in",
      phone: "+91 98765 43213",
      description: "Passionate science educator with expertise in Physics and Chemistry.",
      qualifications: "M.Sc Physics, B.Ed, 12 years experience"
    },
    {
      name: "Mrs. Anita Rodrigues",
      role: "Head of Department - Mathematics",
      department: "Mathematics Department",
      photo: "/images/teacher-2.jpg",
      email: "math@auxiliumcarona.edu.in",
      phone: "+91 98765 43214",
      description: "Dedicated mathematics teacher fostering logical thinking and problem-solving skills.",
      qualifications: "M.Sc Mathematics, B.Ed, 10 years experience"
    },
    {
      name: "Mrs. Lourdes Pereira",
      role: "Head of Department - Languages",
      department: "Languages Department",
      photo: "/images/teacher-3.jpg",
      email: "languages@auxiliumcarona.edu.in",
      phone: "+91 98765 43215",
      description: "Expert in English and Literature, inspiring students to develop strong communication skills.",
      qualifications: "MA English Literature, B.Ed, 8 years experience"
    },
    {
      name: "Mrs. Fatima D'Souza",
      role: "Head of Department - Social Studies",
      department: "Social Studies Department",
      photo: "/images/teacher-4.jpg",
      email: "socialstudies@auxiliumcarona.edu.in",
      phone: "+91 98765 43216",
      description: "Enthusiastic social studies teacher promoting global awareness and civic responsibility.",
      qualifications: "MA History, B.Ed, 9 years experience"
    },
    {
      name: "Mrs. Teresa Almeida",
      role: "Head of Department - Computer Science",
      department: "Computer Science Department",
      photo: "/images/teacher-5.jpg",
      email: "computerscience@auxiliumcarona.edu.in",
      phone: "+91 98765 43217",
      description: "Technology expert preparing students for the digital future.",
      qualifications: "M.Tech Computer Science, B.Ed, 7 years experience"
    },
    {
      name: "Mrs. Josephine Pinto",
      role: "Head of Department - Physical Education",
      department: "Physical Education Department",
      photo: "/images/teacher-6.jpg",
      email: "pe@auxiliumcarona.edu.in",
      phone: "+91 98765 43218",
      description: "Promoting physical fitness and sportsmanship among students.",
      qualifications: "MPEd, B.PEd, 6 years experience"
    }
  ];

  const supportStaff = [
    {
      name: "Mr. Anthony Fernandes",
      role: "Administrative Officer",
      department: "Administration",
      photo: "/images/staff-1.jpg",
      email: "admin@auxiliumcarona.edu.in",
      phone: "+91 98765 43219",
      description: "Managing administrative tasks and ensuring smooth school operations.",
      qualifications: "BA, Diploma in Office Management"
    },
    {
      name: "Mrs. Rosy D'Souza",
      role: "Librarian",
      department: "Library",
      photo: "/images/staff-2.jpg",
      email: "library@auxiliumcarona.edu.in",
      phone: "+91 98765 43220",
      description: "Curating our extensive library collection and promoting reading culture.",
      qualifications: "MLIS, BA Literature"
    },
    {
      name: "Mr. Peter Rodrigues",
      role: "IT Support",
      department: "Information Technology",
      photo: "/images/staff-3.jpg",
      email: "it@auxiliumcarona.edu.in",
      phone: "+91 98765 43221",
      description: "Maintaining computer labs and providing technical support.",
      qualifications: "BCA, CCNA Certified"
    },
    {
      name: "Mrs. Agnes Pereira",
      role: "Nurse",
      department: "Health Services",
      photo: "/images/staff-4.jpg",
      email: "nurse@auxiliumcarona.edu.in",
      phone: "+91 98765 43222",
      description: "Providing health care and first aid services to students and staff.",
      qualifications: "GNM, First Aid Certified"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Meet our dedicated staff and management team committed to excellence in education.
            </p>
          </div>
        </section>

        {/* Management Team Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">School Management</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our leadership team provides strategic direction and ensures the highest standards of education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {managementTeam.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={`${member.name} - ${member.role}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-blue-200">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-blue-600 font-semibold mb-2">{member.department}</p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    <p className="text-sm text-gray-500 mb-4"><strong>Qualifications:</strong> {member.qualifications}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${member.email}`} className="hover:text-blue-600">{member.email}</a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${member.phone}`} className="hover:text-blue-600">{member.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Staff Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Teaching Staff</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our experienced educators are dedicated to nurturing academic excellence and character development.
              </p>
            </div>

            {/* Single Image of All Teaching Staff */}
            <div className="mb-12">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-96 md:h-[500px] overflow-hidden">
                    <Image
                      src="/images/teaching-staff-group.jpg"
                      alt="Auxilium School Teaching Staff Group Photo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Dedicated Teaching Team</h3>
                    <p className="text-gray-600 text-sm">
                      Together, we inspire, educate, and shape the future of our students with passion and commitment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachingStaff.map((teacher, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={teacher.photo}
                      alt={`${teacher.name} - ${teacher.role}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{teacher.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{teacher.department}</p>
                    <p className="text-gray-600 mb-4 text-sm">{teacher.description}</p>
                    <p className="text-xs text-gray-500 mb-4"><strong>Qualifications:</strong> {teacher.qualifications}</p>
                    
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${teacher.email}`} className="hover:text-blue-600">{teacher.email}</a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${teacher.phone}`} className="hover:text-blue-600">{teacher.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Support Staff Section */}
        {/* <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Support Staff</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our dedicated support staff ensures smooth operations and provides essential services to our school community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportStaff.map((staff, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow text-center">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={staff.photo}
                      alt={`${staff.name} - ${staff.role}`}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{staff.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-2">{staff.role}</p>
                    <p className="text-xs text-gray-500 mb-3">{staff.department}</p>
                    <p className="text-gray-600 text-xs mb-3">{staff.description}</p>
                    <p className="text-xs text-gray-500 mb-3"><strong>Qualifications:</strong> {staff.qualifications}</p>
                    
                    <div className="space-y-1 text-xs">
                      <div className="text-gray-600">
                        <a href={`mailto:${staff.email}`} className="hover:text-blue-600">{staff.email}</a>
                      </div>
                      <div className="text-gray-600">
                        <a href={`tel:${staff.phone}`} className="hover:text-blue-600">{staff.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Team Values Section */}
        {/* <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Team Values</h2>
            <p className="text-xl mb-8">
              Every member of our team is committed to these core values that guide our educational mission.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-blue-100">
                  Striving for the highest standards in teaching, learning, and service delivery.
                </p>
              </div>
              <div>
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Care</h3>
                <p className="text-blue-100">
                  Showing genuine care and concern for every student's growth and well-being.
                </p>
              </div>
              <div>
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-blue-100">
                  Working together as a team to create the best learning environment for our students.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        {/* <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about our team or want to know more about our school? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact/form"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/about/leadership"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Meet Our Leadership
              </a>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
