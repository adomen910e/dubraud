import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    requestType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const form = e.target;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setFormData({ name: '', email: '', phone: '', message: '', service: '', requestType: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contactez-nous</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            N'hésitez pas à nous contacter pour toute question ou demande de réservation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Informations pratiques</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Téléphone</p>
                  <p className="text-gray-600">+33 6 95 42 84 77</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">contact@domaine-dubraud.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Adresse</p>
                  <p className="text-gray-600">17 Lieu-dit Dubraud<br />33920 Saint-Christoly-de-Blaye, France</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Horaires</p>
                  <p className="text-gray-600">
                    Lun-Ven: 8h-21h<br />
                    Sam-Dim: 9h-20h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Demande de renseignements</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">✓ Merci pour votre message ! Nous vous recontacterons bientôt.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">✗ Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.</p>
              </div>
            )}

            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="Votre téléphone"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Service souhaité
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                  >
                    <option value="" className="text-gray-500">Sélectionnez un service</option>
                    <option value="pension-retraite" className="text-gray-900">Pension Retraite</option>
                    <option value="pension-sport" className="text-gray-900">Pension Pré Sport</option>
                    <option value="pension-travail" className="text-gray-900">Pension Travail</option>
                    {/* <option value="gite" className="text-gray-900">Gîte</option> */}
                    {/* <option value="chambres" className="text-gray-900">Chambres d'Hôtes</option> */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Type de demande *
                  </label>
                  <select
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                  >
                    <option value="" className="text-gray-500">Que souhaitez-vous ?</option>
                    <option value="visite" className="text-gray-900">Planifier une visite</option>
                    <option value="devis" className="text-gray-900">Demander un devis</option>
                    <option value="informations" className="text-gray-900">Obtenir des informations</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent resize-none"
                  placeholder="Votre message..."
                />
              </div>
              
              <Button 
                type="submit"
                variant="secondary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
            </form>
          </div>
        </div>

        {/* Section Map */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Nous Trouver</h3>
            <p className="text-gray-600">17 Lieu-dit Dubraud, 33920 Saint-Christoly-de-Blaye</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.123456789!2d-0.5123456!3d45.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA3JzI0LjQiTiAwwrAzMCc0NC40Ilc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Domaine de Dubraud"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
