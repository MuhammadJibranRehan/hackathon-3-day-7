import useAuth from '../../../Hooks/useAuth';
import { useForm, Controller } from "react-hook-form";
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './DeliveryForm.css';
import { useDeliveryInfo } from '../../../Contexts/DeliveryProvider';


const DeliveryForm = () => {

    const { user } = useAuth();
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();

    const { setShippingData, setDisabled } = useDeliveryInfo();
    const onSubmit = (data) => {
        // console.log(data);
        setShippingData(data);
        // swal("Information Updated!", "Your shipping details updated successfully!", "success");
        setDisabled(false);
        reset();
    }

    return (
        <section className="my-2">
            <h4 className="">Shipping Information</h4>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <input type="text" {...register("shippingName", { required: true, maxLength: 30 })} placeholder="Name" defaultValue={user.displayName} required />
                    <Controller
                        control={control}
                        name="phone"
                        rules={{
                            required: "Phone number required.",
                            pattern: {
                                maxLength: 13,
                                value: (/(^(\+8801|8801|01))[1|3-9]{1}(\d){8}$/)||
                                (/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
                                message: "Please enter valid phone number."
                            }
                        }}
                        render={({ field: { ref, ...field } }) => (
                            < ReactPhoneInput
                                {...field}
                                inputExtraProps={{
                                    ref,
                                    required: true,
                                    autoFocus: true,
                                    onChange:true,


                                }}

                                country="bd"
                                countryCodeEditable={false}
                                placeholder='Phone number'
                                enableSearch
                                disableSearchIcon
                                autoFormat={true}
                            />

                        )}
                    />

                    <input
                        {...register("shippingEmail", {
                            required: "email field required.",
                            pattern: {
                                // value: /[0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                                message: "Entered value does not match email format"
                            }
                        })}
                        type="email"
                        defaultValue={user.email}
                        placeholder="Email Address" required
                    />
                    < input type="text" {...register("address", { required: true, maxLength: 250 })} placeholder="Address" required />
                    <input type="text" {...register("apartment", { required: true, maxLength: 30 })} placeholder="Apartment, suit, etc" required />
                    <input type="text" {...register("city", { required: true, maxLength: 30 })} placeholder="City/Town" required />
                    <input type="number" min="1" {...register("postcode", { required: true, maxLength: 10 })} placeholder="Postcode/ZIP" required />
                    <input type="text" {...register("country", { required: true, maxLength: 30 })} placeholder="Country" required />
                    <button className="save-continue-btn">Save & Continue</button>
                    <div className='text-danger w-100'>
                        {errors.phone && <span>{errors.phone.message}</span>} <br />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                </div>
            </form >


        </section >
    )
}


export default DeliveryForm;