import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Phone, Mail, MessageCircle, Zap } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    siteType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // toast({
      //   title: "Mensagem enviada com sucesso! 🎉",
      //   description: "Entraremos em contato em até 2 horas via WhatsApp.",
      // });

      // Reset form
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        siteType: '',
        message: ''
      });
    } catch (error) {
      // toast({
      //   title: "Erro ao enviar mensagem",
      //   description: "Tente novamente ou entre em contato via WhatsApp.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.whatsapp && formData.siteType;

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Resposta Garantida em 2 Horas
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Vamos criar seu site dos sonhos?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Preencha o formulário e receba um orçamento personalizado. Sem compromisso, sem enrolação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block font-medium">
                      Nome completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Como você se chama?"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-purple-400"
                      required
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <Label htmlFor="whatsapp" className="text-white mb-2 block font-medium">
                      WhatsApp *
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-purple-400"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block font-medium">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com (opcional)"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>

                  {/* Site Type */}
                  <div>
                    <Label htmlFor="siteType" className="text-white mb-2 block font-medium">
                      Tipo de site desejado *
                    </Label>
                    <Select value={formData.siteType} onValueChange={(value) => handleInputChange('siteType', value)}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white focus:border-purple-400 focus:ring-purple-400">
                        <SelectValue placeholder="Selecione o tipo de site" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="landing-page">Landing Page</SelectItem>
                        <SelectItem value="site-empresa">Site Empresarial</SelectItem>
                        <SelectItem value="loja-virtual">Loja Virtual</SelectItem>
                        <SelectItem value="portfolio">Portfólio Profissional</SelectItem>
                        <SelectItem value="blog">Blog/Site de Conteúdo</SelectItem>
                        <SelectItem value="restaurante">Site para Restaurante</SelectItem>
                        <SelectItem value="consultorio">Site para Consultório</SelectItem>
                        <SelectItem value="salao">Site para Salão de Beleza</SelectItem>
                        <SelectItem value="advocacia">Site para Advocacia</SelectItem>
                        <SelectItem value="outro">Outro (especificar na mensagem)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block font-medium">
                      Conte-nos sobre seu projeto
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva sua ideia, cores preferidas, funcionalidades desejadas..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-purple-400 min-h-[100px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Solicitar Orçamento Grátis
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact methods */}
              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">WhatsApp</h3>
                        <p className="text-gray-300">Resposta mais rápida</p>
                        <p className="text-green-400 font-medium">(11) 99999-9999</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">E-mail</h3>
                        <p className="text-gray-300">Para orçamentos detalhados</p>
                        <p className="text-blue-400 font-medium">contato@sitespro.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Telefone</h3>
                        <p className="text-gray-300">Seg à Sex, 9h às 18h</p>
                        <p className="text-purple-400 font-medium">(11) 3000-0000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Guarantee box */}
              {/* <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Garantia de Satisfação</h3>
                  <p className="text-green-100">
                    Se não ficar 100% satisfeito, refazemos ou devolvemos seu dinheiro. Sem perguntas.
                  </p>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;