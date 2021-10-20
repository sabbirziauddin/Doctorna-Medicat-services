import React from 'react';

const DoctorPortal = () => {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Blood donation
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Opening hours of the MHH blood transfusion service:Whole blood donations

                        Fr07.00 – 09.00 Uhr
                        by appointment



                        Apheresis

                        Mo, Do, Fr       07.00 – 15.00 Uhr
                        Di, Mi              12.00 – 19.00 Uhr
                        by appointment




                        Autologous donations

                        by appointment



                        Location: Building K03, level S0



                        Further information is available
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Outpatient treatment
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        The outpatient department of the renal center includes the care of patients with very poor kidney function, polyclinic care for dialysis patients (HD and PD) and care for the center's kidney transplant patients.

                        Registration: Tel .: 0511 / 532-4003
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Center for rare deasease
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        According to the European definition, a disease is considered "rare" if it affects less than 5 in every 10,000 people. The care of people with rare diseases has for the
                        of the Hannover Medical School is of particular importance. A team of specialists treats areas of the brain, psyche, heart and skin.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorPortal;