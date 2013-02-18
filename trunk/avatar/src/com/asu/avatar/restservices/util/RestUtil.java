package com.asu.avatar.restservices.util;
/**
 * @author Vasu Gupta
 *
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import com.asu.avatar.util.Utilities;

public class RestUtil {
	private static Log logger = LogFactory.getLog(RestUtil.class);
	static String noRecFound = RestServiceConstants.NO_RECORDS_FOUND;

	public static void chkReqParameter(HttpServletRequest request,
			String reqParametersStr) throws Exception {
		if (!Utilities.isBlankString(reqParametersStr)) {
			String reqParameters[] = reqParametersStr.split(",");

			int size = reqParameters.length;
			for (int ii = 0; ii < size; ii++) {
				String parameterName = (String) reqParameters[ii];

				if (Utilities
						.isBlankString(request.getParameter(parameterName))) {
					throw new Exception("Required Parameter " + parameterName
							+ " is Null");
				}
			}

		}

	}

	public static void printXMLResponse(HttpServletRequest request,
			HttpServletResponse response, String responseXML)
			throws ServletException, IOException {
		PrintWriter out = null;
		response.setContentType("text/xml;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		out = response.getWriter();
		out.print(responseXML);
		out.flush();
		out.close();
	}

	public static void printJSONResponse(HttpServletRequest request,
			HttpServletResponse response, String responseXML)
			throws ServletException, IOException {
		PrintWriter out = null;
		response.setContentType("application/json;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		out = response.getWriter();
		out.print(responseXML);
		out.flush();
		out.close();
	}

	public static String createErrorXML(String code, String reason) {
		StringBuilder sb = new StringBuilder();
		try {
			sb.append("ERROR: Occured");
			sb.append("code:\"" + code + "\", description:\"" + reason);
		} catch (Exception e) {
			logger.debug("Exception createResponseXML:" + e);
		}
		return sb.toString();
	}

	public static StringBuilder addXMLWrapper(String xmlDoc) {

		StringBuilder sb = new StringBuilder();
		if (xmlDoc == null || xmlDoc.equals(""))
			xmlDoc = noRecFound;

		sb.append("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
		sb.append("<response status=\"success\">");
		sb.append(xmlDoc);
		sb.append("</response>");

		return sb;
	}

	public static void authenticateUserSession(HttpServletRequest request) {
		// TO-DO
	}

}
