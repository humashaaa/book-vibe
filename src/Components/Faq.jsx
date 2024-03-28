
const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details>
				<summary className="py-2 font-bold outline-none cursor-pointer focus:underline">How can I place an order on your website?

</summary>
				<div className="px-4 pb-4">
					<p>You can easily place an order by browsing through our collection of books, selecting the ones you want, and adding them to your shopping cart. Then proceed to checkout and follow the prompts to complete your purchase.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 font-bold outline-none cursor-pointer focus:underline">How long will it take for my order to arrive?



</summary>
				<div className="px-4 pb-4">
					<p>Delivery times may vary depending on your location and the shipping method chosen. Generally, domestic orders arrive within 3-7 business days, while international orders may take longer, typically between 7-21 business days.
</p>
				</div>
			</details>
			<details>
				<summary className="py-2 font-bold outline-none cursor-pointer focus:underline">What is your return policy?





</summary>
				<div className="px-4 pb-4">
					<p>We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return the item(s) within 30 days of receipt for a refund or exchange. Please refer to our Returns & Exchanges policy for more details.
</p>
				</div>
			</details>
			<details>
				<summary className="py-2 font-bold outline-none cursor-pointer focus:underline">What payment methods do you accept?

</summary>
				<div className="px-4 pb-4">
					<p>We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, and sometimes other regional payment options depending on your location.</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 font-bold outline-none cursor-pointer focus:underline">Do you offer international shipping?

</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Yes, we offer international shipping to many countries. During the checkout process, you will be able to see if your country is eligible for shipping and the associated costs.</p>
					
				</div>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Faq;